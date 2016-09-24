const {
  assertEqual
} = require('./helpers');

const post = require('../helpers/get-post-sync');

module.exports = function ex18(getTitle) {
  getTitle('post')
    .fork(
      console.error,
      (title) => {
        assertEqual(
          post.title,
          title
        );
      }
    );
};