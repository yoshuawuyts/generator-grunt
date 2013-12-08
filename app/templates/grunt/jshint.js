'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },

  all: {
    src: [
      '<%= vars.apiPath %>',
      '<%= vars.configPath %>',
      '<%= vars.jsAssetsPath %>',
      '<%= vars.testsPath %>',
    ]
  },

  api: {
    src: [
      '<%= vars.apiPath %>', ,
    ]
  },

  assets: {
    src: [
      '<%= vars.jsAssetsPath %>',
    ]
  },

  config: {
    src: [
      '<%= vars.configPath %>',
    ]
  },

  test: {
    src: [
      '<%= vars.testsPath %>',
    ]
  }
};
