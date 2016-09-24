const {
  assertEqual
} = require('./helpers');

const post = require('../helpers/get-post-sync');

module.exports = function ex19(titleToDiv) {
  titleToDiv('post')
    .fork(
      console.error,
      (div) => {
        assertEqual(
          `<div>${post.title}</div>`,
          div
        );
      }
    );
};