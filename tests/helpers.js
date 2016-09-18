function assertEqualArrays(x, y) {
  if (x.length !== y.length) throw ("expected " + x + " to equal " + y);
  for (const i in x) {
    if (x[i] !== y[i]) {
      throw ("expected " + x + " to equal " + y);
    }
  }
}

function assertEqual(x, y) {
  if (x !== y) throw ("expected " + x + " to equal " + y);
}

function assertDeepEqual(x, y) {
  if (x.val !== y.val) throw ("expected " + inspectIt(x) + " to equal " + inspectIt(y));
}

function inspectIt(x) {
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