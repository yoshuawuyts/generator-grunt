'use strict';

module.exports = {
  options: {
    livereload: {
      port: 35729,
    }
  },

  css: {
    files: ['<%= vars.stylesPath %>'],
    tasks: ['styles', 'clean:after'],
  },

  jade: {
    files: ['<%= vars.viewsPath %>'],
    tasks: ['jade:compile', 'clean:after'],
  },

  api: {
    files: ['<%= vars.apiPath %>'],
    tasks: ['jsbeautifier:api', 'jshint:api', 'mochaTest:dot'],
  },

  jsAssets: {
    files: ['<%= vars.jsAssetsPath %>'],
    tasks: ['jsbeautifier:assets', 'jshint:assets', 'copy:js', 'concat:js', 'uglify:compile', 'clean:after'],
  },

  config: {
    files: ['<%= vars.configPath %>'],
    tasks: ['jsbeautifier:config', 'jshint:config'],
  },

  tests: {
    files: ['<%= vars.testsPath %>'],
    tasks: ['jsbeautifier:tests', 'jshint:tests'],
  },

  jsonlint: {
    files: ['<%= vars.jsonPath %>'],
    tasks: ['jsonlint:all'],
  },

  'mochaTest': {
    files: ['<%= vars.apiPath %>'],
    tasks: ['mochaTest:dot']
  }
};
