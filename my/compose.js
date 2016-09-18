module.exports = function compose(...funcs) {
  return function composed(arg) {
    return funcs.reduceRight(function iter(result, func) {
      return func(result);
    }, arg);
  };
};