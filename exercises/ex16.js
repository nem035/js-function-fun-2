const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');

const getTextFileSync = require('../helpers/get-text-file-sync');

// Use getURL() / getProtocol()
// to get the protocol of the url.
module.exports = function ex16() {

  const getURL = function() {
    return getTextFileSync('url');
  }.toIO();

  const getProtocol = compose(_.head, _.split('/'))
  const protocol = compose(map(getProtocol), getURL);

  return protocol;
};