const _ = require('ramda');
const {
  map,
  compose,
  chain
} = require('pointfree-fantasy');
const {
  runIO
} = require('./custom/io');

const toStartMessage = (num) => (`
|-----------------------------------------
| Exercise ${num}
|`);

const toEndMessage = () => `| Test passed.
|-----------------------------------------`;

const pureLog = function(num) {
  console.log(num);
  return num;
}.toIO();

const log = function(transform, num) {
  runIO(pureLog(transform(num)));
  return num;
};

const logExerciseStart = _.curry(log)(toStartMessage);
const logExerciseEnd = _.curry(log)(toEndMessage);

module.exports = {
  logExerciseStart,
  logExerciseEnd
};