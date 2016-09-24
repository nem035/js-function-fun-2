const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');

const {
  Left,
  Right
} = require('data.either');

// Write a function that uses checkActive() 
// and showWelcome() to grant access or 
// return the error
const showWelcome = compose(
  _.add("Welcome "),
  _.prop('name')
);

const checkActive = (user) => (
  user.active ?
  Right(user) :
  Left('Your account is not active')
)

module.exports = function ex12() {

  const grantAccess = compose(
    map(showWelcome),
    checkActive
  );

  return grantAccess;
};