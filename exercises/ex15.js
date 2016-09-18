const {
  map,
  compose
} = require('pointfree-fantasy');

const fs = require('fs');
const path = require('path');

// Get the text from the IO and strip the spaces
const getIOText = function(name) {
  return fs.readFileSync(
    path.join(__dirname, name)
  ).toString();
}.toIO();

const stripSpaces = function(s) {
  return s.replace(/\s+/g, '');
};

module.exports = function ex15() {

  const getStrippedText = compose(
    map(stripSpaces),
    getIOText
  );

  return getStrippedText;
};