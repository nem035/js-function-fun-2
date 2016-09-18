const {
  log
} = require('../log');
const {
  map,
  compose
} = require('pointfree-fantasy');

// Use function from previous exercise
// and Either as a functor to save the 
// user if they are valid

const save = function(x) {
  return x;
};

const check = require('./ex13')();

module.exports = function ex14() {
  const checkAndSave = compose(map(save), check);
  return checkAndSave;
};