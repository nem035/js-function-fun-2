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

module.exports = function ex19(titleToDiv) {
  titleToDiv('post.json')
    .fork(
      console.error,
      function(div) {
        assertEqual(
          `<div>${post.title}</div>`,
          div
        );
      }
    );
};