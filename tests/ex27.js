const {
  assertEqual
} = require('./helpers');

module.exports = function ex27(sum) {
  assertEqual(6, sum([1, 2, 3]));
};