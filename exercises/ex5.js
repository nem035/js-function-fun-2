const _ = require('ramda')

// -- Challenge 2 -------------------------
// Return a list of the author names in
// articles using only get, _.compose, and
// _.map.
module.exports = function ex5() {

  const names = _.map(
    _.compose(_.prop('name'),
      _.prop('author'))
  );

  return names;
}