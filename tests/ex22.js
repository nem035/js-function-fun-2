const {
  assertEqualArrays
} = require('./helpers');
const fs = require('fs');
const path = require('path');

const comments = JSON.parse(
  fs
  .readFileSync(
    path.join(__dirname, '..', 'exercises', 'comments.json')
  )
  .toString()
);

module.exports = function ex22(extractComments) {
  extractComments('post.json')
    .fork(
      console.error,
      function(extracted) {
        assertEqualArrays(
          comments,
          extracted
        );
      }
    );
};