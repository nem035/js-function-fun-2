const _ = require('ramda');

// Curried functions are easy to compose.
// Using _.map, _.length, and _.split, write
// a function that returns the lengths of
// the words in a string.
module.exports = function ex4() {

  const lengths = _.compose(
    _.map(_.length), _.split(' ')
  );

  return lengths;
}