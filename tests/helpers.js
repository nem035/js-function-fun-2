const xymsg = (x, y) => `expected ${x} to equal${y}`;

const assertEqualArrays = (x, y) => {
  if (x.length !== y.length) throw xymsg(x, y);
  for (const i in x) {
    if (x[i] !== y[i]) {
      throw xymsg(x, y);
    }
  }
}

const assertEqual = (x, y) => {
  if (x !== y) xymsg(x, y);
}

const assertDeepEqual = (x, y) => {
  if (x.val !== y.val) throw xymsg(inspectIt(x), inspectIt(y));
}

const inspectIt = (x) => {
  return (x.inspect && x.inspect()) ||
    (x.toString && x.toString()) ||
    x.valueOf(); //hacky for teachy.
}

module.exports = {
  assertEqual,
  assertEqualArrays,
  assertDeepEqual,
  inspectIt
};