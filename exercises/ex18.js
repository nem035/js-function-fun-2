const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');

// Use getPost(id) to return a Future 
// of the title of the post 
const getPost = require('../helpers/get-post');

module.exports = function ex18() {

  const getTitle = compose(
    map(_.prop('title')),
    getPost
  );

  return getTitle;
};