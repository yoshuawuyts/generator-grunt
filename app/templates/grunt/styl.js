'use strict';

module.exports = {
  compile: {
    options: {
      whitespace: true,
      compress: false
    },
    src: '<%= vars.stylesPath %>',
    dest: '<%= vars.tmpPath %>/style.css'
  }
};
