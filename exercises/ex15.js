const {
  map,
  compose
} = require('pointfree-fantasy');

const getTextFileSync = require('../helpers/get-text-file-sync');

// Get the text from the IO and strip the spaces
const getIOText = function(name) {
  return getTextFileSync(name);
}.toIO();

const stripSpaces = (s) => s.replace(/\s+/g, '');

module.exports = function ex15() {

  const getStrippedText = compose(
    map(stripSpaces),
    getIOText
  );

  return getStrippedText;
};