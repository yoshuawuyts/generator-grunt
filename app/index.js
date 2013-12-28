'use strict';

// load in external files
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

/*
 *  Init project
 */

// create GruntGenerator object
var GruntGenerator = module.exports = function GruntGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // run npm & bower after prompts are done
  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  // read package.json
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

// extend base prototype
util.inherits(GruntGenerator, yeoman.generators.Base);

/*
 *  User prompt
 */

GruntGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  console.log('Let\'s start building your Gruntfile!\n');

  // modulename prompt
  var prompts = [{
      name: 'moduleName',
      message: 'What do you want to name this project?'
    },

    // authorname prompt
    {
      name: 'authorName',
      message: 'What is your name?'
    },

    // views prompt
    {
      type: 'list',
      name: 'viewType',
      message: 'Choose your HTML engine:',
      choices: [{
        value: 'html',
        name: 'HTML (Available soon)',
        default: true,
      }, {
        value: 'jade',
        name: 'Jade',
      }]
    },

    // styles prompt
    {
      type: 'list',
      name: 'styleType',
      message: 'Choose your CSS preprocessor:',
      choices: [{
        value: 'css',
        name: 'CSS (Available soon)',
        default: true,
      }, {
        value: 'rework',
        name: 'Rework',
      }, {
        value: 'scss',
        name: 'SCSS (Available soon)'
      }, {
        value: 'stylus',
        name: 'Stylus (Available soon)'
      }]
    },

    // backend prompt
    {
      type: 'list',
      name: 'backType',
      message: 'Choose your backend:',
      choices: [{
        value: 'node',
        name: 'Node.js',
        default: true,
      }, {
        value: 'static',
        name: 'A static file server with autoreload',
      }]
    }
  ];

  // bind responses to object
  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;
    this.authorName = props.authorName;
    this.viewType = props.viewType;
    this.styleType = props.styleType;
    this.backType = props.backType;

    // fire off async code
    cb();

    // leak 'this' to global scope
  }.bind(this));
};

/*
 *  Create files
 */

// make directories
GruntGenerator.prototype.projectDirs = function projectDirs() {
  this.mkdir('api');
  this.mkdir('assets/fonts');
  this.mkdir('assets/images');
  this.mkdir('assets/js');
  this.mkdir('assets/vendor');
  this.mkdir('assets/styles');
  this.mkdir('assets/views');
  this.mkdir('config');
  this.mkdir('grunt');
  this.mkdir('tests');
};

// copy views
GruntGenerator.prototype.viewFiles = function viewFiles() {
  if (this.viewType == 'html') {
    this.viewTask = "'copy:views',";
  }
  if (this.viewType == 'jade') {
    this.copy('grunt/jade.js', 'grunt/jade.js');
    this.viewSlug = "jade: require('./grunt/jade'),";
    this.viewTask = "'jade',";
  }
};

// copy styles
GruntGenerator.prototype.styleFiles = function styleFiles() {
  if (this.styleType == 'css') {
    this.styleTask = "'copy:css',";
  }
  if (this.styleType == 'rework') {
    this.copy('grunt/styl.js', 'grunt/styl.js');
    this.styleSlug = "styl: require('./grunt/styl'),";
    this.styleTask = "'concat:styles',\n      'styl',";
  }
  if (this.styleType == 'scss') {
    this.styleSlug = "styl: require('./grunt/sass'),";
    this.styleTask = "'sass',";
  }
  if (this.styleType == 'stylus') {
    this.styleSlug = "styl: require('./grunt/stylus'),";
    this.styleTask = "'stylus',";
  }
};

// copy backend
GruntGenerator.prototype.backFiles = function backFiles() {
  if (this.backType == 'node') {
    this.copy('grunt/node-inspector.js', 'grunt/node-inspector.js');
    this.copy('grunt/nodemon.js', 'grunt/nodemon.js');
    this.backSlug = "'node-inspector': require('./grunt/node-inspector'),\n    nodemon: require('./grunt/nodemon'),";
    this.concurrentDev = "dev: {\n    tasks: ['watch', 'open', 'nodemon', 'node-inspector']\n  },";
  }
  if (this.backType == 'static') {
    this.copy('grunt/connect.js', 'grunt/connect.js');
    this.backSlug = "connect: require('./grunt/connect'),";
    this.concurrentDev = "dev: {\n    tasks: ['connect', 'watch']\n  },";
  }
};

// copy general grunt files
GruntGenerator.prototype.generalFiles = function generalFiles() {
  this.copy('grunt/clean.js', 'grunt/clean.js');
  this.copy('grunt/concat.js', 'grunt/concat.js');
  this.copy('grunt/copy.js', 'grunt/copy.js');
  this.copy('grunt/jsbeautifier.js', 'grunt/jsbeautifier.js');
  this.copy('grunt/jshint.js', 'grunt/jshint.js');
  this.copy('grunt/jsonlint.js', 'grunt/jsonlint.js');
  this.copy('grunt/karma.js', 'grunt/karma.js');
  this.copy('grunt/mocha-test.js', 'grunt/mocha-test.js');
  this.copy('grunt/protractor.js', 'grunt/protractor.js');
  this.copy('grunt/uglify.js', 'grunt/uglify.js');
  this.copy('grunt/watch.js', 'grunt/watch.js');
  this.copy('grunt/open.js', 'grunt/open.js');

  // styles
  this.copy('grunt/autoprefixer.js', 'grunt/autoprefixer.js');
  this.copy('grunt/csslint.js', 'grunt/csslint.js');
  this.copy('grunt/csso.js', 'grunt/csso.js');

  // rendered templates
  this.template('grunt/concurrent.js', 'grunt/concurrent.js');
};

// copy project files
GruntGenerator.prototype.projectFiles = function projectFiles() {
  this.copy('csslintrc', '.csslintrc');
  this.copy('gitignore', '.gitignore');
  this.copy('jsbeautifyrc', '.jsbeautifyrc');
  this.copy('jshintrc', '.jshintrc');

  // rendered templates
  this.template('package.json', 'package.json');
  this.template('Gruntfile.js', 'Gruntfile.js');
};
