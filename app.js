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
const end = 21;
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
const extract = (dir, num) => files[`${dir}-${EXERCISES_NAME_ROOT}${num}`];
const extractExerciseAndText = (num) => ({
  ex: extract(EXERCISES_DIR, num),
  test: extract(TESTS_DIR, num)
});

const run = function({
  ex,
  test
}) {
  test(ex());
};

const execute = _.compose(
  logExerciseEnd,
  run,
  extractExerciseAndText,
  logExerciseStart
);

_.forEach(execute, exerciseNums);