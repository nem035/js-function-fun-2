const path = require('path');
const _ = require('ramda');

const EXERCISES_PATH = './exercises/';
const NAME_ROOT = 'ex';

const [startEx, endEx] = [1, 4];

const exerciseNums = _.range(startEx)(_.inc(endEx));
const numToName = _.concat(NAME_ROOT);
const nameToPath = _.concat(EXERCISES_PATH);
const numToPath = _.compose(nameToPath, numToName);
const exercisePaths = _.map(numToPath)(exerciseNums);
const exercises = _.map(require, exercisePaths);
const invoke = (fn) => fn();

_.forEach(invoke, exercises);