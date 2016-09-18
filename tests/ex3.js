const {
  assertEqual
} = require('./helpers');

module.exports = function ex3(max) {
  assertEqual(9, max([1, -3483, 9, 7, 2]));
  assertEqual(-1, max([-21, -3483, -2, -1]));
};