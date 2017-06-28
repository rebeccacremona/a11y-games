
Install and Run
---------------

1. Install [Docker](https://docs.docker.com/installation/) or [Docker Toolbox](https://www.docker.com/products/docker-toolbox)

2. `git clone https://github.com/rebeccacremona/a11y-games.git`

3. `cd a11y-games`

4. Fire up the web server: `make up`

5. Navigate to a11y games:
   -  Docker: head to http://localhost/
   -  Docker Machine: run `docker-machine ip` to discover the IP address of your virtualbox. Then, head to http://that-ip-address.

6. Hit "Begin"! You'll be presented with a series of challenges. To advance to the next challenge and win the game, fix the broken web elements, making them fully accessible by altering the html, tweaking the css, or adding javascript to the specified source file. (There are guidelines and hints in the code to help you along.)

7. To rebuild the website and experience your changes: `make rebuild`, and refresh your browser window.

8. When you are done playing, to stop the containers: `make down`

Tips and Hints
--------------
Check out the challenge's info page for a more detailed introduction to the accessibility issues it addresses. Each challenge also comes with a sample solution.

For tutorials and code samples, check out the Mozilla Developer Network's [spectacular documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility) on web accessibility.
