'use strict';

module.exports = {
  compile: {
    files: [{
      expand: true,
      src: ['<%= vars.viewsPath %>'],
      dest: '<%= vars.buildPath %>/views/',
      ext: '.html',
    }]
  }
};
