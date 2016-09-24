const _ = require('ramda');
const {
  map,
  compose,
  mconcat
} = require('pointfree-fantasy');
const {
  Max,
  getResult
} = require('pointfree-fantasy/instances/monoids');

// write a function perform a max using
// getResult(), mconcat() and Max()
//
// var max = _.reduce(_.max, 0)

module.exports = function ex29() {
  const max = compose(
    getResult,
    mconcat,
    map(Max)
  );
  return max;
};