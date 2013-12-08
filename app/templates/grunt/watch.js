'use strict';

var gruntfile = require('../Gruntfile');

module.exports = {

  'css': {
    files: ['<%= vars.stylesPath %>'],
    tasks: ['css', 'clean:after'],
  },

  'jade': {
    files: ['<%= vars.viewsPath %>'],
    tasks: ['jade:compile', 'clean:after'],
  },

  'api': {
    files: ['<%= vars.apiPath %>'],
    tasks: ['jsbeautifier:api', 'jshint:api', 'mochaTest:dot'],
  },

  'assets': {
    files: ['<%= vars.jsAssetsPath %>'],
    tasks: ['jsbeautifier:assets', 'jshint:assets'],
  },

  'config': {
    files: ['<%= vars.configPath %>'],
    tasks: ['jsbeautifier:config', 'jshint:config'],
  },

  'tests': {
    files: ['<%= vars.testsPath %>'],
    tasks: ['jsbeautifier:tests', 'jshint:tests'],
  },

  jsonlint: {
    files: ['<%= vars.jsonPath %>'],
    tasks: ['jsonlint:all'],
  },

  mochaTest: {
    files: ['<%= vars.apiPath %>'],
    tasks: ['mochaTest:dot']
  }
};
