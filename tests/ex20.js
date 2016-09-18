const {
  assertEqual
} = require('./helpers');
const fs = require('fs');
const path = require('path');

const person = JSON.parse(
  fs
  .readFileSync(
    path.join(__dirname, '..', 'exercises', 'person.json')
  )
  .toString()
);

module.exports = function ex20(personStrings) {
  personStrings.onValue(function(str) {
    assertEqual(
      `<person>${person.name}</person>`,
      str
    );
  });
};