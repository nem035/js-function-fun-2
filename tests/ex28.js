const {
  assertEqual
} = require('./helpers');

module.exports = function ex28(product) {
  assertEqual(12, product([2, 2, 3]));
};