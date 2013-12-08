'use strict';

module.exports = {
  optimize: {
    options: {
      restucture: true,
    },
    src: '<%= vars.tmpPath %>/style.prefix.css',
    dest: '<%= vars.buildPath %>/style.min.css'
  },
  report: {
    options: {
      restucture: true,
      report: 'gzip'
    },
    src: '<%= vars.tmpPath %>/style.prefix.css',
    dest: '<%= vars.buildPath %>style.min.css'
  }
};
