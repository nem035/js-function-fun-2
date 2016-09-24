const {
  assertEqual
} = require('./helpers');

const user = {
  first: 'Hunter',
  middle: 'Stockton',
  last: 'Thompson'
};

module.exports = function ex30(fullName) {
  assertEqual('Hunter Stockton Thompson', fullName(user));
};