const _ = require('ramda');

// Create a function to triple every
// number in a list using only
// _.multiply and _.map.
module.exports = function ex2() {
  const tripleList = _.map(_.multiply(3));
  return tripleList;
}