'use strict';

module.exports = function (grunt) {

  grunt.initConfig({

    // configurable paths
    vars: {
      apiPath: 'api{/, /**/, /**/**}*.js',
      configPath: ['Gruntfile.js', 'grunt/**/*.js', 'config/*.js'],
      stylesPath: 'assets/styles{/, /**/, /**/**/}*.styl',
      jsAssetsPath: 'assets/js{/, /**/, /**/**/}*.js',
      jsonPath: ['./*.json', '.jshintrc', '.jsbeautifyrc', 'tests/**/*.json'],
      testsPath: 'tests{/, /**/, /**/**}*.js',
      viewsPath: 'assets/views{/, /**/, /**/**/}*.jade',
      tmpPath: '.tmp',
      buildPath: 'build'
    },

    <%= viewSlug %>
    autoprefixer: require('./grunt/autoprefixer'),
    csslint: require('./grunt/csslint'),
    csso: require('./grunt/csso'),
    <%= styleSlug %>
    <%= backSlug %>
    karma: require('./grunt/karma'),
    mochaTest: require('./grunt/mocha-test'),
    protractor: require('./grunt/protractor'),
    clean: require('./grunt/clean'),
    concat: require('./grunt/concat'),
    concurrent: require('./grunt/concurrent'),
    copy: require('./grunt/copy'),
    jsbeautifier: require('./grunt/jsbeautifier'),
    jshint: require('./grunt/jshint'),
    jsonlint: require('./grunt/jsonlint'),
    uglify: require('./grunt/uglify'),
    release: require('./grunt/release'),
    watch: require('./grunt/watch'),
  });

  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Lint all files
  grunt.registerTask('lint', [
    'jsbeautifier:all',
    'jshint:all',
    'jsonlint:all',
  ]);

  // Build views
  grunt.registerTask('styles', [
    <%= styleTask %>
    'autoprefixer',
    'csso:optimize',
    'csslint',
  ]);

  // Build html
  grunt.registerTask('views', [
    <%= viewTask %>
  ]);

  // Build js
  grunt.registerTask('js', [
    'concat',
    'uglify:compile',
  ]);

  // Build css, html & js
  grunt.registerTask('build', [
    'clean:before',
    'concurrent:build',
    'clean:after',
  ]);

  // Execute tests
  grunt.registerTask('test', [
    'mochaTest',
    'karma:unit',
  ]);

  // Check the performance of all tasks
  grunt.registerTask('time', [
    'lint',
    'styles',
    'views',
    'js',
    'test',
  ]);

  // Build, lint, test and server
  grunt.registerTask('default', [
    'lint',
    'build',
    'test',
    'concurrent:dev',
  ]);
};
