# generator-grunt [![NPM version](https://badge.fury.io/js/generator-grunt.png)](http://badge.fury.io/js/generator-grunt)

Yeoman generator for [grunt](gruntjs.com)

## Installation
With [node](nodejs.org) and [yo](http://yeoman.io/index.html) installed:
````
npm install -g generator-grunt
````
````
mkdir PROJECTNAME && cd PROJECTNAME && yo grunt
````

## Commands

````styles````:  Compile styles (css, rework, scss, less, stylus), autoprefix, optimize with CSSo

````views````: Compile views (html, jade, ejs)

````js````: Concat, mangle, optimize and minify

````build````: Views, styles, js

````test````: Test (mocha, jasmine, karma, supertest)

````time````: Lint, build & test while benchmarking

````deploy````: Add git tags & push upstream / NPM

````default````: Build, lint, test, server & watch

While always autoreloading, autocorrecting and watching everything...

## Directory structure
Generator-grunt assumes the following directory structure:
````
.
├── api
├── assets                // CDN src files
│   ├── fonts
│   ├── images
│   ├── js
│   ├── vendor            // bower
│   ├── styles
│   └── views
├── build                 // CDN dist files
├── config                // server config
├── grunt
└── tests     
````
You can edit the paths in ````Gruntfile.js````.

## Roadmap
- ~~variable file paths~~
- best practice bower pathing
- copy images / fonts
- SCSS support
- EJS support
- jasmine support
- supertest support

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
