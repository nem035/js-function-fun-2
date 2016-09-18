const {
  assertEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');

module.exports = function ex15(getStrippedText) {
  assertEqual("happyface", runIO(getStrippedText('happyface.txt')));
};