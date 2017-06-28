FROM starefossen/ruby-node
MAINTAINER Rebecca Lynn Cremona <rcremona@law.harvard.edu>

ENV LANG C.UTF-8

# throw errors if Gemfile has been modified since Gemfile.lock
RUN bundle config --global frozen 1

RUN mkdir -p /usr/src/a11y-web
WORKDIR /usr/src/a11y-web

RUN npm install -g grunt-cli

COPY build-environment/package.json /usr/src/a11y-web
RUN npm install

COPY build-environment/Gemfile /usr/src/a11y-web
COPY build-environment/Gemfile.lock /usr/src/a11y-web
RUN bundle install

COPY build-environment/gruntfile.js /usr/src/a11y-web
