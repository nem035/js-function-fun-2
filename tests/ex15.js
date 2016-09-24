const {
  assertEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');

const getTextFileSync = require('../helpers/get-text-file-sync');
const text = getTextFileSync('happyface')

module.exports = function ex15(getStrippedText) {
  assertEqual(
    text.trim().replace(/\s+/g, ''),
    runIO(getStrippedText('happyface'))
  );
};