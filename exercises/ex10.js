const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');

// Use safeGet and _.head to find the first initial of the user
const safeGet = require('../helpers/safe-get');

module.exports = function ex10() {
  const initial = compose(map(_.head), safeGet('name'));
  return initial;
};