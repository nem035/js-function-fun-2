const _ = require('ramda');
const {
  map,
  compose,
  mconcat
} = require('pointfree-fantasy');
const {
  Sum,
  getResult
} = require('pointfree-fantasy/instances/monoids');

// write a function perform a sum using
// getResult(), mconcat() and Sum()
//
// var sum = _.reduce(_.add, 0)

module.exports = function ex27() {
  const sum = compose(
    getResult,
    mconcat,
    map(Sum)
  );
  return sum;
};