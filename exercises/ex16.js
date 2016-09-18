const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const fs = require('fs');
const path = require('path');

// Use getURL() / getProtocol()
// to get the protocol of the url.
module.exports = function ex16() {

  const getURL = function() {
    return fs.readFileSync(
      path.join(__dirname, './url.txt')
    ).toString();
  }.toIO();

  const getProtocol = compose(_.head, _.split('/'))
  const protocol = compose(map(getProtocol), getURL);

  return protocol;
};