const {
  assertEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');

module.exports = function ex16(protocol) {
  assertEqual('http:', runIO(protocol(null)));
};