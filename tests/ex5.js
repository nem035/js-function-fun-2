const {
  assertEqualArrays
} = require('./helpers');

const articles = require('./articles');

module.exports = function ex5(names) {
  assertEqualArrays(
    ['Debbie Downer', 'Caspar Milquetoast'],
    names(articles)
  );
};