'use strict';

module.exports = {
  options: {
    stripBanners: true,
  },
  concat: {
    src: ['.tmp/*.js'],
    dest: '.tmp/concat.js',
  },
};
