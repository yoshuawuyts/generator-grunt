'use strict';

module.exports = {
  options: {
    compress: {
      screw_ie8: true,
    },
    mangle: {
      screw_ie8: true,
    },
  },
  compile: {
    src: '<%= vars.tmpPath %>/concat.js',
    dest: '<%= vars.buildPath %>/app.min.js',
  },
};
