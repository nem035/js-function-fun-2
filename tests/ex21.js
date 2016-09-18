const {
  assertDeepEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/maybe');

const user = {
  id: 2,
  name: "Albert",
  address: {
    street: {
      number: 22,
      name: "Walnut St"
    }
  }
};

module.exports = function ex21(getUserStreetName) {
  assertDeepEqual(
    Maybe(user.address.street.name),
    getUserStreetName(user)
  );
};