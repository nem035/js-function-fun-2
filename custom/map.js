const _ = require('ramda');

const map = _.curry(function(fn, obj) {
  return obj.map(fn);
});

module.exports = map;