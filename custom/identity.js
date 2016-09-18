// A functor is an object or a data structure you can map over
// A functor must implement the map function

function _Identity(val) {
  this.val = val;
}

const Identity = function(x) {
  return new _Identity(x);
};

_Identity.prototype.map = function(fn) {
  return Identity(fn(this.val));
};

module.exports = Identity;