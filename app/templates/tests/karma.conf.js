'use strict';

// Karma configuration
// Generated on Wed Nov 20 2013 14:19:12 GMT+0100 (W. Europe Standard Time)

module.exports = function (config) {
  config.set({

    // list of files / patterns to load in the browser
    files: [
      'tests/assets/**/*.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
  });
};
