const {
  assertDeepEqual
} = require('./helpers');
const {
  Left,
  Right
} = require('data.either');

module.exports = function ex12(grantAccess) {

  assertDeepEqual(Left('Your account is not active'), grantAccess({
    active: false,
    name: 'Gary'
  }));

  assertDeepEqual(Right('Welcome Theresa'), grantAccess({
    active: true,
    name: 'Theresa'
  }));
};