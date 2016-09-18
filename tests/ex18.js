const {
  assertEqual
} = require('./helpers');
const fs = require('fs');
const path = require('path');

const post = JSON.parse(
  fs
  .readFileSync(
    path.join(__dirname, '..', 'exercises', 'post.json')
  )
  .toString()
);

module.exports = function ex18(getTitle) {
  getTitle('post.json')
    .fork(
      console.error,
      function(title) {
        assertEqual(
          post.title,
          title
        );
      }
    );
};