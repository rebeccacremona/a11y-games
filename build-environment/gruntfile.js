'use strict';

module.exports = function (grunt) {

  // CONFIGURATION
  var globalConfig = {
    buildDestination: "build/dev",
    assetsSrc: "assets/src",
    assetsDist: "assets/dist",
    assetsDestination: "assets"
  };

  require('jit-grunt')(grunt);

  grunt.initConfig({
    // load global config
    globalConfig: globalConfig,

    //////////
    // Watch
    /////////

    watch: {
      all: {
        files: ['app/**/*', '<%= globalConfig.assetsSrc %>/**/*'],
        tasks: ['build:dev'],
        options: {
          interrupt: true,
          interval: 1000
        }
      }
    },

    //////////
    // BASH
    /////////

    exec: {
      jekyllIncremental: {
        command: 'cd app; bundle exec jekyll build --incremental; cd ../',
        stderr: false,
        callback: function (error, stdout, stderr) {
          if (stderr) {
            grunt.warn(stderr)
          }
        }
      },
      jekyllFresh: {
        command: 'cd app; bundle exec jekyll build; cd ../',
        stderr: false,
        callback: function (error, stdout, stderr) {
          if (stderr) {
            grunt.warn(stderr)
          }
        }
      },
      cleanBuilds: {
        command: 'rm -rf build/dev/*;',
        stderr: false,
        callback: function (error, stdout, stderr) {
          if (stderr) {
            grunt.warn(stderr)
          }
        }
      },
      cleanAssets: {
        command: 'cd <%= globalConfig.assetsDist %>; rm -rf *; cd ../',
        stderr: false,
        callback: function (error, stdout, stderr) {
          if (stderr) {
            grunt.warn(stderr)
          }
        }
      }
    },

    //////////
    // CSS
    //////////

    // sass (libsass) config
    sass: {
      main: {
        options: {
          style: "expanded"
        },
        files: [{
          src: '<%= globalConfig.assetsSrc %>/scss/main.scss',
          dest: '<%= globalConfig.assetsDist %>/expanded/css/main.css'
        },{
          src: '<%= globalConfig.assetsSrc %>/scss/buttons-and-links.scss',
          dest: '<%= globalConfig.assetsDist %>/expanded/css/buttons-and-links.css'
        },{
          src: '<%= globalConfig.assetsSrc %>/scss/keeping-focus.scss',
          dest: '<%= globalConfig.assetsDist %>/expanded/css/keeping-focus.css'
        }]
      }
    },

    //////////
    // Other Files to Move Around
    //////////

    copy: {
      // assets in src that are not otherwise processed, to dist/expanded
      fonts: {
        expand: true,
        nonull: false,
        cwd: '<%= globalConfig.assetsSrc %>/fonts',
        src: '*',
        dest: '<%= globalConfig.assetsDist %>/expanded/fonts/'
      },
      images: {
        expand: true,
        nonull: false,
        cwd: '<%= globalConfig.assetsSrc %>/images',
        src: '*',
        dest: '<%= globalConfig.assetsDist %>/expanded/images/'
      },
      javascripts: {
        expand: true,
        nonull: false,
        cwd: '<%= globalConfig.assetsSrc %>/javascripts',
        src: '*',
        dest: '<%= globalConfig.assetsDist %>/expanded/javascripts/'
      },
      // prepared assets to build
      toBuild: {
        expand: true,
        nonull: true,
        cwd: '<%= globalConfig.assetsDist %>/expanded',
        src: '**/*',
        dest: '<%= globalConfig.buildDestination %>/<%= globalConfig.assetsDestination %>/'
      }
    },

    //////////
    // Validation, etc.
    //////////

    // html validation
    htmllint: {
      dev: ["<%= globalConfig.buildDestination %>/**/*.html"]
    }

  });

  ///////////////////////
  // Private grunt tasks. Don't call directly from the command line.

  // Hack to stop contrib concat (and maybe other things) from failing silently
  // https://github.com/gruntjs/grunt-contrib-concat/issues/17
  grunt.registerTask('warn-fail', 'Fail on warning log', function() {
    var log = grunt.log;
    var _warn = log.warn;
    log.warn = function() {
      _warn.apply(log, arguments);
      grunt.fail.warn("Warning log has triggered failure");
    };
  });

  grunt.registerTask('assets:expanded', [
    'warn-fail',
    'sass',
    'newer:copy:fonts',
    'newer:copy:images',
    'newer:copy:javascripts',
    'newer:copy:toBuild'
  ]);

  /////////////////////
  // Public grunt tasks
  grunt.registerTask('build', [
    'warn-fail',
    'exec:cleanBuilds',
    'exec:jekyllFresh',
    'assets:expanded'
  ]);

  // Register the default task
  grunt.registerTask('default', ['build', 'watch']);

};
