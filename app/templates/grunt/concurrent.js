'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },

  <%= concurrentDev %>

  build: {
    tasks: ['styles', 'views', 'js'],
  }
};
