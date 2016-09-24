const _ = require('ramda');
const {
  liftA2
} = require('pointfree-fantasy');

// Write a function that gets both player1 and player2 from the cache.
const cache = require('../data/cache');
const game = _.curry((p1, p2) => `${p1} vs ${p2}`);

const getPlayerFromCache = function(p) {
  return cache[p];
}.toIO();

module.exports = function ex26() {
  const getPlayers = liftA2(
    game,
    getPlayerFromCache('p2'),
    getPlayerFromCache('p1')
  );
  return getPlayers;
};