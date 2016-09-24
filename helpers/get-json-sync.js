const fs = require('fs');
const path = require('path');

module.exports = function getJSONSync(name) {
  return JSON.parse(
    fs
    .readFileSync(
      path.join(process.cwd(), 'data', `${name}.json`)
    )
    .toString()
  );
}