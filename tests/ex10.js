const {
  assertDeepEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/maybe');

module.exports = function ex10(initial) {
  const user1 = {
    id: 1,
    name: 'Albert'
  };
  const user2 = {
    id: 1
  };

  assertDeepEqual(Maybe('A'), initial(user1));
  assertDeepEqual(Maybe(null), initial(user2));
};