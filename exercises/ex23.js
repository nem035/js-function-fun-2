const _ = require('ramda');
const {
  ap
} = require('pointfree-fantasy');

const Maybe = require('pointfree-fantasy/instances/Maybe');

// Write a function that add's two possibly
// null numbers together using Maybe and ap()
module.exports = function ex23() {
  const possiblyAdd = (x, y) => Maybe.of(_.add).ap(Maybe(x)).ap(Maybe(y));
  return possiblyAdd;
};