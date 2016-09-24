const {
  assertDeepEqual
} = require('./helpers');

const {
  Tuple
} = require('../helpers/tuple');

const user = {
  first: 'Hunter',
  middle: 'Stockton',
  last: 'Thompson'
};

const str1 = 'abc';
const str2 = 'def';
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

module.exports = function ex30(concatTuples) {

  const result = concatTuples([
    Tuple(str1, arr1),
    Tuple(str2, arr2)
  ]);

  assertDeepEqual(
    Tuple(`${str1}${str1}`, [...arr1, ...arr2]),
    result
  );
};