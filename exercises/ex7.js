const _ = require('ramda')

// There is more to point-free programming
// than compose! Let's build ourselves
// another function that combines functions
// to let us write code without glue constiables.

const fork = _.curry((lastly, f, g, x) => lastly(f(x), g(x)));

// As you can see, the fork function is a
// pipeline like compose, except it duplicates
// its value, sends it to two functions, then
// sends the results to a combining function.
//
// Your challenge: implement a function to
// compute the average values in a list using
// only fork, _.divide, _.sum, and _.length.

module.exports = function ex7() {
  const avg = fork(_.divide, _.sum, _.length);
  return avg;
}