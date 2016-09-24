const _ = require('ramda');
const {
  extendFunctionPrototype
} = require('./custom/io');
extendFunctionPrototype();

const {
  logExerciseStart,
  logExerciseEnd
} = require('./log');

const load = require('./load');

const EXERCISES_DIR = 'exercises';
const TESTS_DIR = 'tests';
const NAME_ROOT = 'ex';
const start = 1;
const end = 31;

const exerciseNums = _.range(start)(_.inc(end));

const loadExercise = load(
  EXERCISES_DIR,
  NAME_ROOT
);

const loadTest = load(
  TESTS_DIR,
  NAME_ROOT
);

const testExercise = (num) => {
  const exercise = loadExercise(num);
  const test = loadTest(num);
  test(exercise());
};

const execute = _.compose(
  logExerciseEnd,
  testExercise,
  logExerciseStart
);

_.forEach(execute, exerciseNums);