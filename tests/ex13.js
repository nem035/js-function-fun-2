const {
  assertDeepEqual
} = require('./helpers');
const {
  Left,
  Right
} = require('data.either');

module.exports = function ex13(check) {
  assertDeepEqual(Right("fpguy99"), check("fpguy99"));
  assertDeepEqual(Left("You need > 3"), check("..."));
};