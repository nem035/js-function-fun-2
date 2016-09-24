const _ = require('ramda');
const {
  map,
  compose,
  mconcat
} = require('pointfree-fantasy');
const {
  getResult
} = require('pointfree-fantasy/instances/monoids');

// For Tuple to be a monoid, it's x, y must also be monoids. 
// Monoids beget monoids.
// Use this information to define a concat() method on
// the _Tuple's prototype
const {
  Tuple,
  _Tuple
} = require('../helpers/tuple');

module.exports = function ex31() {

  _Tuple.prototype.concat = function(t2) {
    return Tuple(
      this.x.concat(t2.x),
      this.y.concat(t2.y)
    );
  };

  const concatTuples = mconcat;

  return concatTuples;
};