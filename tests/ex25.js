const {
  assertEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/Maybe');

module.exports = function ex24(possiblyAdd) {
  assertDeepEqual(Maybe(5), possiblyAdd(Maybe(2), Maybe(3)));
  assertDeepEqual(Maybe(null), possiblyAdd(Maybe(null), Maybe(3)));
};

ex3.fork(log, (html) => {
  assertEqual("<div>Love them futures</div><li>This class should be illegal</li><li>Monads are like space burritos</li>", html)
  console.log("exercise 3...ok!")
})