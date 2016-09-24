const {
  assertEqual
} = require('./helpers');

const articles = require('../data/articles');

module.exports = function ex6(isAuthor) {
  assertEqual(
    false,
    isAuthor('New Guy', articles)
  );
  assertEqual(
    true,
    isAuthor('Debbie Downer', articles)
  );
};