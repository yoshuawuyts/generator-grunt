'use strict';
module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },

  lint: {
    src: ['<%= vars.buildPath %>/styles.css']
  },
};
