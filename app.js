const _ = require('ramda');

const {
  log,
  logExerciseStart,
  logExerciseEnd
} = require('./log');

const load = require('./load');

const EXERCISES_DIR = 'exercises';
const TESTS_DIR = 'tests';
const EXERCISES_NAME_ROOT = 'ex';
const start = 1;
const end = 7;
const exerciseNums = _.range(start)(_.inc(end));
const exercises = load(
  EXERCISES_DIR,
  EXERCISES_NAME_ROOT,
  exerciseNums
);

const tests = load(
  TESTS_DIR,
  EXERCISES_NAME_ROOT,
  exerciseNums
);

const files = _.mergeAll([exercises, tests])

const run = function(num) {
  const ex = files[`${EXERCISES_DIR}-${EXERCISES_NAME_ROOT}${num}`];
  const test = files[`${TESTS_DIR}-${EXERCISES_NAME_ROOT}${num}`];
  test(ex());
};

const execute = _.compose(logExerciseEnd, run, logExerciseStart);

_.forEach(execute, exerciseNums);