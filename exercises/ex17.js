const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');

// Write a function that returns 
// the Maybe(email) of the User 
// from getCache(). Don't forget 
// to JSON.parse once it's pulled 
// from the cache so you can 
// _.prop() the email

const cache = require('./cache');

const getCache = function(x) {
  return Maybe(cache[x]);
}.toIO();

module.exports = function ex17() {
  const getEmail = compose(_.prop('email'), JSON.parse);
  const maybeEmail = compose(map(map(getEmail)), getCache);
  return maybeEmail;
};