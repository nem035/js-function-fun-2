const {
  assertEqual
} = require('./helpers');
const {
  runIO
} = require('../custom/io');

const {
  player1,
  player2
} = require('../data/cache');

module.exports = function ex26(getPlayers) {
  assertEqual(`${player1} vs ${player2}`, runIO(getPlayers));
};