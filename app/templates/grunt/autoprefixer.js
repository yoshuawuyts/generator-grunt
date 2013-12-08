'use strict';

module.exports = {
  options: {
    browsers: ['last 1 version', '> 1%']
  },
  prefix: {
    src: '<%= vars.tmpPath %>/style.css',
    dest: '<%= vars.tmpPath %>/style.prefix.css'
  }
};
