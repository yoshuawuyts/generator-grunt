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

````styles````:  Compile styl, autoprefix, optimize with CSSo

````views````: Compile jade

````js````: Concat, optimize, minify and mangle

````build````: JSbeautifier, JShint

````time````: Lint, build & test while benchmarking

````deploy````: Add git tags & push upstream

````default````: Build, lint, test, server & watch

While always autoreloading, autocorrecting and watching everything...

## Directory structure
Generator-grunt assumes the following directory structure:
````
.
├── api
├── assets                // CDN-ready files
│   ├── images
│   ├── js
│   ├── vendor            // bower
│   ├── styles
│   └── views
├── build
├── config                // server config
├── grunt
└── tests     
````
You can always change the paths in ````Gruntfile.js````.

## Roadmap
- ~~variable file paths~~
- SCSS support
- EJS support

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
