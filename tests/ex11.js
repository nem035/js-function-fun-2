const {
  assertDeepEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/maybe');

module.exports = function ex11(protectedParseInt) {
  assertDeepEqual(Maybe(4), protectedParseInt("4"));
  assertDeepEqual(Maybe(null), protectedParseInt(null));
};