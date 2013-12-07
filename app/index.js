'use strict';

// load in external files
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

// initialize generator
var PigletGenerator = module.exports = function PigletGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // run npm after installation is done
  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  // parse package.json
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

// extend base prototype
util.inherits(PigletGenerator, yeoman.generators.Base);

PigletGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // views prompt
  var prompts = [{
    type: 'list',
    name: 'viewType',
    message: 'What view engine will you use?',
    choices: [{
      value: 'html',
      name: 'HTML',
      default: true,
    }, {
      value: 'jade',
      name: 'Jade',
    }, {
      value: 'none',
      name: 'None'
    }]
  },

  // styles prompt
  {
    type: 'list',
    name: 'styleType',
    message: 'What styles engine will you use?',
    choices: [{
      value: 'css',
      name: 'CSS',
      default: true,
    }, {
      value: 'rework',
      name: 'Rework',
    }, {
      value: 'scss',
      name: 'SCSS'
    }, {
      value: 'stylus',
      name: 'Stylus'
    }, {
      value: 'none',
      name: 'None'
    }]
  },

  // backend prompt
  {
    type: 'list',
    name: 'backType',
    message: 'What backend will you use?',
    choices: [{
      value: 'express',
      name: 'Express',
      default: true,
    }, {
      value: 'none',
      name: 'None'
    }]
  }];

  // bind responses to object
  this.prompt(prompts, function (props) {
    this.viewType = props.viewType;
    this.styleType = props.styleType;
    cb();
  }.bind(this));
};


// copy over the project files
PigletGenerator.prototype.projectFiles = function projectFiles() {
  this.copy('.csslintrc', '.csslintrc');
  this.copy('.gitignore', '.gitignore');
  this.copy('.jsbeautifyrc', '.jsbeautifyrc');
  this.copy('.jshintrc', '.jshintrc');
  this.mkdir('app');
  this.mkdir('tests');
  this.copy('package.json', 'package.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');
};

// copy views
PigletGenerator.prototype.viewFiles = function viewFiles() {
  if (this.viewType == 'html') {
    /* xxx */
  };
  if (this.viewType == 'jade') {
    this.copy('grunt/jade.js', 'grunt/jade.js');
  };
};

// copy styles
PigletGenerator.prototype.styleFiles = function styleFiles() {
  if (this.styleType == 'css') {
    /* xxx */
  };
  if (this.styleType == 'rework') {
    /* xxx */
  };
  if (this.styleType == 'scss') {
    /* xxx */
  };
  if (this.styleType == 'stylus') {
    /* xxx */
  };
};

// copy backend
PigletGenerator.prototype.backFiles = function backFiles() {
  if (this.backType == 'express') {
    /* xxx */
  };
};

if (this.projectType == 'expressType') {
  PigletGenerator.prototype.complex = function complex() {

    this.copy('grunt/autoprefixer.js', 'grunt/autoprefixer.js');
    this.copy('grunt/clean.js', 'grunt/clean.js');
    this.copy('grunt/concat.js', 'grunt/concat.js');
    this.copy('grunt/concurrent.js', 'grunt/concurrent.js');
    this.copy('grunt/connect.js', 'grunt/connect.js');
    this.copy('grunt/copy.js', 'grunt/copy.js');
    this.copy('grunt/csslint.js', 'grunt/csslint.js');
    this.copy('grunt/csso.js', 'grunt/csso.js');
    this.copy('grunt/jade.js', 'grunt/jade.js');
    this.copy('grunt/jsbeautifier.js', 'grunt/jsbeautifier.js');
    this.copy('grunt/jshint.js', 'grunt/jshint.js');
    this.copy('grunt/jsonlint.js', 'grunt/jsonlint.js');
    this.copy('grunt/karma.js', 'grunt/karma.js');
    this.copy('grunt/merge-conflict.js', 'grunt/merge-conflict.js');
    this.copy('grunt/mocha-test.js', 'grunt/mocha-test.js');
    this.copy('grunt/node-inspector.js', 'grunt/node-inspector.js');
    this.copy('grunt/nodemon.js', 'grunt/nodemon.js');
    this.copy('grunt/protractor.js', 'grunt/protractor.js');
    this.copy('grunt/release.js', 'grunt/release.js');
    this.copy('grunt/styl.js', 'grunt/styl.js');
    this.copy('grunt/uglify.js', 'grunt/uglify.js');
    this.copy('grunt/watch.js', 'grunt/watch.js');
  };
};
