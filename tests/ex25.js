const {
  assertEqual
} = require('./helpers');
const Maybe = require('pointfree-fantasy/instances/Maybe');

const comments = require('../helpers/get-comments-sync')();
const post = require('../helpers/get-post-sync')();

module.exports = function ex24(makeHtml) {
  makeHtml.fork(console.error, (html) => {
    assertEqual(
      `<div>${post.title}</div>` +
      `<li>${comments[0]}</li>` +
      `<li>${comments[1]}</li>`,
      html
    );
  });
};