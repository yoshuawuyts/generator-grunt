'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PigletGenerator = module.exports = function PigletGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PigletGenerator, yeoman.generators.Base);

PigletGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'list',
    name: 'projectType',
    message: 'What type of configuration do you want?',
    choices: [{
      value: 'expressType',
      name: 'Express - step-by-step config',
      default: true,
    }, {
      value: 'liteType',
      name: 'Vanilla - no plugins installed',
    }]
  }];

  this.prompt(prompts, function (props) {
    this.projectType = props.projectType;
    this.projectName = props.projectName;

    cb();
  }.bind(this));
};

PigletGenerator.prototype.complex = function complex() {
  this.mkdir('app');
  this.mkdir('tests');

  this.copy('package.json', 'package.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');

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

PigletGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('.csslintrc', '.csslintrc');
  this.copy('.gitignore', '.gitignore');
  this.copy('.jsbeautifyrc', '.jsbeautifyrc');
  this.copy('.jshintrc', '.jshintrc');
};
