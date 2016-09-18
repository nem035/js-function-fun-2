const {
  assertEqual
} = require('./helpers');

module.exports = function ex7(avg) {
  assertEqual(3, avg([1, 2, 3, 4, 5]));
};