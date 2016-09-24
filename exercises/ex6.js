const _ = require('ramda')

// Make a boolean function that says whether
// a given person wrote any of the articles.
// Use the names function you wrote in exercise 5

const names = require('./ex5')();

module.exports = function ex6() {

  const isAuthor = (name, list) => (
    _.compose(_.contains(name), names)(list)
  );

  return isAuthor;
}