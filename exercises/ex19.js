const {
  map,
  compose
} = require('pointfree-fantasy');

// Use ex18 to extend the computation and 
// convert the title to a div string
const getTitle = require('./ex18')();

const toDiv = function(x) {
  return "<div>" + x + "</div>";
}

module.exports = function ex19() {
  const titleToDiv = compose(map(toDiv), getTitle);
  return titleToDiv;
};