const {
  assertEqual
} = require('./helpers');
const fs = require('fs');
const path = require('path');

const person = require('../helpers/get-person-sync')();

module.exports = function ex20(personStrings) {
  personStrings.onValue((str) => {
    assertEqual(
      `<person>${person.name}</person>`,
      str
    );
  });
};