const {
  Left,
  Right
} = require('data.either');

// Write a validation function that 
// checks for a length > 3. It should 
// return Right(x) if it is greater than 3 
// and Left("You need > 3") otherwise.
module.exports = function ex13() {

  const check = (x) => (
    x.length > 3 ?
    Right(x) :
    Left("You need > 3")
  );

  return check;
};