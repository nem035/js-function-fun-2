const _ = require('ramda');
const {
  map,
  compose,
  chain
} = require('pointfree-fantasy');

const Future = require('data.future');
const fs = require('fs');
const path = require('path');

// Use monads to first get the Post with getPost(), 
// then pass it's id in to getComments().

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

function getComments(i) {
  return new Future(function(rej, res) {
    setTimeout(function() {
      res(
        JSON.parse(
          fs.readFileSync(
            path.join(__dirname, 'comments.json')
          ).toString()
        )
      );
    }, 300);
  });
}

module.exports = function ex22() {
  const extractComments = compose(
    chain(getComments),
    map(_.prop('id')),
    getPost
  );

  return extractComments;
};