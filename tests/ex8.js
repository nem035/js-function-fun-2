const {
  assertDeepEqual
} = require('./helpers');
const {
  Identity
} = require('pointfree-fantasy/instances/identity');

module.exports = function ex8(inc) {
  assertDeepEqual(Identity(3), inc(Identity(2)))
};