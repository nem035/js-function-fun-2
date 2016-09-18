const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');
const {
  Bacon
} = require('baconjs');

// Use only safeGet() to safely return 
// the user's street name
const safeGet = _.curry(function(x, o) {
  return Maybe(o[x]);
});

module.exports = function ex21() {
  const getUserStreetName = compose(
    map(map(safeGet('name'))),
    map(safeGet('street')),
    safeGet('address')
  );

  return getUserStreetName;
};