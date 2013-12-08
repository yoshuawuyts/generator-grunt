'use strict';

module.exports = {
  all: {
    src: [
      '<%= vars.apiPath %>',
      '<%= vars.configPath %>',
      '<%= vars.jsAssetsPath %>',
      '<%= vars.testsPath %>',
    ],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  api: {
    src: ['<%= vars.apiPath %>', ],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  assets: {
    src: ['<%= vars.jsAssetsPath %>'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  config: {
    src: ['<%= vars.configPath %>'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
  tests: {
    src: ['<%= vars.testsPath %>'],
    options: {
      config: '.jsbeautifyrc'
    }
  },
};
