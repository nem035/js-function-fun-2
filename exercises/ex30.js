const _ = require('ramda');
const {
  map,
  compose,
  mconcat
} = require('pointfree-fantasy');
const {
  getResult
} = require('pointfree-fantasy/instances/monoids');

// use the function monoid instance to mconcat 
// the functions below to create a full name string.

const firstName = _.prop('first');
const middleName = _.prop('middle');
const lastName = _.prop('last');
const space = _.concat(' ');

module.exports = function ex30() {
  const fullName = mconcat([
    lastName,
    space,
    middleName,
    space,
    firstName
  ]);
  return fullName;
};