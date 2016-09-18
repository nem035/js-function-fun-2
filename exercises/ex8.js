const _ = require('ramda');
const {
  map
} = require('pointfree-fantasy');

// Use _.add(x,y) and map(f,x) to make 
// a function that increments a value 
// inside a functor
module.exports = function ex8() {
  const inc = map(_.add(1));
  return inc;
};