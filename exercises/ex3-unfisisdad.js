const {
  log
} = require('../log');
const {
  assertEqual,
  assertDeepEqual,
  inspectIt
} = require('./test');

const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');
const {
  Identity
} = require('pointfree-fantasy/instances/identity');

module.exports = function() {

  // challenge 1
  // ==========
  // Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor
  log("--------Start challenge 1--------")

  const ex1 = map(_.add(1));

  assertDeepEqual(Identity(3), ex1(Identity(2)))
  log("challenge 1...ok!")

  // challenge 2
  // ==========
  // Use _.head to get the first element of the list
  const xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
  log("--------Start challenge 2--------")


  const ex2 = map(_.head);

  assertDeepEqual(Identity('do'), ex2(xs))
  log("challenge 2...ok!")

  // challenge 3
  // ==========
  // Use safeGet and _.head to find the first initial of the user
  const safeGet = _.curry(function(x, o) {
    return Maybe(o[x])
  })
  const user = {
    id: 2,
    name: "Albert"
  }
  log("--------Start challenge 3--------")

  const ex3 = compose(map(_.head), safeGet('name'));

  assertDeepEqual(Maybe('A'), ex3(user))
  log("challenge 3...ok!")


  // challenge 4
  // ==========
  // Use Maybe to rewrite ex4 without an if statement
  log("--------Start challenge 4--------")

  const ex4 = compose(map(parseInt), Maybe);
  assertDeepEqual(Maybe(4), ex4("4"))
  log("challenge 4...ok!")
};