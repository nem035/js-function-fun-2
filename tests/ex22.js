const {
  assertEqualArrays
} = require('./helpers');

const comments = require('../helpers/get-comments-sync')();

module.exports = function ex22(extractComments) {
  extractComments('post')
    .fork(
      console.error,
      (extracted) => {
        assertEqualArrays(
          comments,
          extracted
        );
      }
    );
};