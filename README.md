# generator-grunt

Yeoman generator for [grunt](gruntjs.com)

## Installation
````
npm install -g generator-grunt
````

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
You can always change the paths in ````Gruntfile.js```` (implemented soon™).

## Roadmap
- ~~Default build~~
- Vanilla build
- Variable support
- HTML engine options
- CSS engine options
- H5BP support
- Backend options

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)
