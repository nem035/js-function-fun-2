const _ = require('ramda');
const {
  liftA2
} = require('pointfree-fantasy');

const Maybe = require('pointfree-fantasy/instances/Maybe');

// Rewrite ex23 to use liftA2 instead of ap()
module.exports = function ex24() {
  const possiblyAdd = liftA2(_.add);
  return possiblyAdd;
};