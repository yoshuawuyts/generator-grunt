'use strict';

module.exports = {
  js: {
    files: [{
      flatten: true,
      expand: true,
      src: ['<%= vars.jsBowerPath %>'],
      dest: '<%= vars.tmpPath %>/js',
    }],
  }
};
