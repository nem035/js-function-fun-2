const {
  assertEqualArrays
} = require('./helpers');

module.exports = function ex4(lengths) {
  assertEqualArrays(
    [4, 4, 1, 4],
    lengths('once upon a time')
  );
};