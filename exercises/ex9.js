const _ = require('ramda');
const {
  map
} = require('pointfree-fantasy');

// Use _.head to get the first element of the list
module.exports = function ex9() {
  const first = map(_.head);
  return first;
};