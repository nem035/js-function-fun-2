const {
  assertDeepEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');
const Maybe = require('pointfree-fantasy/instances/maybe');

module.exports = function ex17(maybeEmail) {
  assertDeepEqual(
    Maybe("nem@jsislife.net"),
    runIO(maybeEmail('user'))
  );
};