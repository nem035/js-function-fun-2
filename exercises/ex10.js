const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');

// Use safeGet and _.head to find the first initial of the user
const safeGet = _.curry(function(x, o) {
  return Maybe(o[x])
});

module.exports = function ex10() {
  const initial = compose(map(_.head), safeGet('name'));
  return initial;
};