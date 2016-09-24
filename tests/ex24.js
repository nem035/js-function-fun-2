const {
  assertDeepEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/Maybe');

module.exports = function ex24(possiblyAdd) {
  assertDeepEqual(Maybe(5), possiblyAdd(Maybe(2), Maybe(3)));
  assertDeepEqual(Maybe(null), possiblyAdd(Maybe(null), Maybe(3)));
};