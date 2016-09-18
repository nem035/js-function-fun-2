module.exports = function curry(fn) {
  return function fnWrap(...args) {
    if (fn.length > args.length) {
      return function(...rest) {
        return fnWrap(...[...args, ...rest]);
      };
    }
    return fn(...args);
  };
};