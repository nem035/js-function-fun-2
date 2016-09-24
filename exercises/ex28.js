const _ = require('ramda');
const {
  map,
  compose,
  mconcat
} = require('pointfree-fantasy');
const {
  Product,
  getResult
} = require('pointfree-fantasy/instances/monoids');

// write a function perform a product using
// getResult(), mconcat() and Product()
//
// var Product = _.reduce(_.product, 0)

module.exports = function ex28() {
  const product = compose(
    getResult,
    mconcat,
    map(Product)
  );
  return product;
};