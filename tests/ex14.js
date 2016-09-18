const {
  assertDeepEqual
} = require('./helpers');
const {
  Left,
  Right
} = require('data.either');

module.exports = function ex14(checkAndSave) {
  assertDeepEqual(Right("fpguy99"), checkAndSave("fpguy99"));
  assertDeepEqual(Left("You need > 3"), checkAndSave("duh"));
};