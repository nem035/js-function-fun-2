const {
  assertDeepEqual
} = require('./helpers');
const {
  Identity
} = require('pointfree-fantasy/instances/identity');

module.exports = function ex9(first) {
  const xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
  assertDeepEqual(Identity('do'), first(xs))
};