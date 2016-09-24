const {
  assertEqual
} = require('./helpers');

module.exports = function ex29(max) {
  assertEqual(32, max([-12, 32, 3]))
};