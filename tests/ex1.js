const {
  assertEqualArrays
} = require('./helpers');

module.exports = function ex1(words) {
  assertEqualArrays(
    ['one', 'two', 'three'],
    words('one two three')
  );
};