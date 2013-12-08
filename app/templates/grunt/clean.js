'use strict';

module.exports = {
  before: {
    files: [{
      dot: true,
      src: [
        '<%= vars.buildPath %>',
        '<%= vars.tmpPath %>'
      ],
    }, ],
  },

  after: {
    files: [{
      dot: true,
      src: [
        '<%= vars.tmpPath %>'
      ],
    }, ],
  },
};
