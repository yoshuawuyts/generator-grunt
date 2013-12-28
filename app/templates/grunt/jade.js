'use strict';

module.exports = {
  compile: {
    files: [{
      flatten: true,
      expand: true,
      src: ['<%= vars.viewsPath %>'],
      dest: '<%= vars.buildPath %>/views/',
      ext: '.html',
    }]
  }
};
