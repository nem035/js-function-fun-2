const {
  assertEqualArrays
} = require('./helpers');

module.exports = function ex2(tripleList) {
  assertEqualArrays(
    [3, 6, 9],
    tripleList([1, 2, 3])
  );
};