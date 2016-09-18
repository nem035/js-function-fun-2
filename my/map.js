const _ = require('ramda');
module.exports = function map(fn, list) {
  return list.length > 0 ? [fn(list[0])].concat(...map(fn, list.slice(1))) :
    list;
};