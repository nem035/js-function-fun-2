const _ = require('ramda');

const _Tuple = function(x, y) {
  this.x = x;
  this.y = y;
}

_Tuple.prototype.inspect = function() {
  return `Tuple(${inspect(this.x)}, ${inspect(this.y)})`;
}

_Tuple.prototype.empty = function() {
  return Tuple(this.x.empty(), this.y.empty());
};

const Tuple = _.curry((x, y) => new _Tuple(x, y));

module.exports = {
  Tuple,
  _Tuple
};