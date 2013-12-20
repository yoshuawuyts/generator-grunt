'use strict';

module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },

  all: {
    src: [
      'Gruntfile.js',
      'grunt/*.js',
      'app/index.js'
    ]
  },
};
