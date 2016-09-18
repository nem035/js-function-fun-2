const _ = require('ramda');

// Make a function called "words" which 
// returns a list of words in a string.
// Use only the split function and
// currying.

module.exports = function ex1() {
  const words = _.split(' ');
  return words;
};