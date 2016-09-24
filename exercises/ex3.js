const _ = require('ramda');

// Create a function to find the largest
// number in a list. You can use the
// greater(a,b) function which returns the
// greater of its two inputs. You can do
// this with currying and one of the list
// functions _.map, _.filter, or _.reduce.

const greater = (a, b) => a > b ? a : b;

module.exports = function ex3() {
  const max = _.reduce(greater)(Number.MIN_SAFE_INTEGER);
  return max;
}