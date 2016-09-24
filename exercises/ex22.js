const _ = require('ramda');
const {
  map,
  compose,
  chain
} = require('pointfree-fantasy');

// Use monads to first get the Post with getPost(), 
// then pass it's id in to getComments().
const getPost = require('../helpers/get-post');
const getComments = require('../helpers/get-comments');

module.exports = function ex22() {
  const extractComments = compose(
    chain(getComments),
    map(_.prop('id')),
    getPost
  );

  return extractComments;
};