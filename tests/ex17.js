const {
  assertDeepEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');
const Maybe = require('pointfree-fantasy/instances/maybe');

const email = JSON.parse(require('../data/cache').user).email;

module.exports = function ex17(maybeEmail) {
  assertDeepEqual(
    Maybe(email),
    runIO(maybeEmail('user'))
  );
};