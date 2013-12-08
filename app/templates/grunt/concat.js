'use strict';

module.exports = {
  options: {
    stripBanners: true,
  },
  concat: {
    src: ['<%= vars.tmpPath %>/*.js'],
    dest: '<%= vars.tmpPath %>/concat.js',
  },
};
