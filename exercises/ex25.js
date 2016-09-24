const _ = require('ramda');
const {
  liftA2
} = require('pointfree-fantasy');

// Make a future by running getPost() and getComments() 
// using applicatives, then create the Html with both
const getPost = require('./get-post');
const getComments = require('./get-comments');

const makeComments = _.reduce((acc, c) => `${acc}<li>${c}</li>`, '');
const render = _.curry(
  (post, comments) => `<div>${post.title}</div>${makeComments(comments)}`
);

module.exports = function ex25() {
  const makeHtml = liftA2(render, getPost(), getComments());
  return makeHtml;
};