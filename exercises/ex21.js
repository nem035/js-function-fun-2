const _ = require('ramda');
const {
  map,
  compose,
  chain
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');

// Use only safeGet() to safely return 
// the user's street name
const safeGet = _.curry((x, o) => Maybe(o[x]));

module.exports = function ex21() {
  const getUserStreetName = compose(
    chain(safeGet('name')),
    chain(safeGet('street')),
    safeGet('address')
  );

  return getUserStreetName;
};