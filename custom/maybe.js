function _Maybe(val) {
  this.val = val;
}

const Maybe = function(x) {
  return new _Maybe(x);
};

_Maybe.prototype.map = function(fn) {
  return (this.val === null || this.val === undefined) ? Maybe(fn(this.val)) : Maybe(null);
};

module.exports = Maybe;