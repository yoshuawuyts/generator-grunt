'use strict';

module.exports = {
  options: {
    stripBanners: true,
    separator: '\n\n',
    nonull: true,
  },
  js: {
    src: ['<%= vars.jsAssetsPath %>'],
    dest: '<%= vars.tmpPath %>/concat.js',
  },

  styles: {
    files: [{
      src: ['<%= vars.stylesPath %>'],
      dest: '<%= vars.tmpPath %>/concat.styl',
    }]
  },
};
