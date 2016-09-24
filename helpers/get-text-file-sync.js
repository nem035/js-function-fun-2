const fs = require('fs');
const path = require('path');

module.exports = (name) => (
  fs.readFileSync(
    path.join(process.cwd(), 'data', `${name}.txt`)
  ).toString()
);