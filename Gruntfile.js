'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    jsbeautifier: require('./grunt/jsbeautifier'),
    jshint: require('./grunt/jshint'),
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // default
  grunt.registerTask('default', [
    'jsbeautifier',
    'jshint'
  ]);
};
