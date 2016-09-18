const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');

// Use Maybe to protect parseInt
module.exports = function ex11() {
  const protectedParseInt = compose(
    map(parseInt),
    Maybe
  );
  return protectedParseInt;
};