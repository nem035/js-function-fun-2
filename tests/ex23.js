const {
  assertDeepEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/Maybe');

module.exports = function ex23(possiblyAdd) {
  assertDeepEqual(Maybe(5), possiblyAdd(2, 3));
  assertDeepEqual(Maybe(null), possiblyAdd(null, 3));
};