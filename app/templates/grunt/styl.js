'use strict';

module.exports = {
  compile: {
    options: {
      whitespace: true,
      compress: false,
      vendors: []
    },
    src: '<%= vars.tmpPath %>/concat.styl',
    dest: '<%= vars.tmpPath %>/style.css'
  }
};
