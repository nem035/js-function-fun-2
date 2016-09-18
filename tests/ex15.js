const {
  assertEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');

const fs = require('fs');
const path = require('path');
const text = fs.readFileSync(
  path.join(__dirname, '..', 'exercises', 'happyface.txt')
).toString();

module.exports = function ex15(getStrippedText) {
  assertEqual(
    text.trim().replace(/\s+/g, ''),
    runIO(getStrippedText('happyface.txt'))
  );
};