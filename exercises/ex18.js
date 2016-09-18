const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');

const Future = require('data.future');
const fs = require('fs');
const path = require('path');

// Use getPost(id) to return a Future 
// of the title of the post 
function getPost(file) {
  return new Future(function(rej, res) {
    fs.readFile(
      path.join(__dirname, file),
      function(_, post) {
        setTimeout(function() {
          res(JSON.parse(post.toString()));
        }, 300);
      }
    )
  });
}

module.exports = function ex18() {

  const getTitle = compose(
    map(_.prop('title')),
    getPost
  );

  return getTitle;
};