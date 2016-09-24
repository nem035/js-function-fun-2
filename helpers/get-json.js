const Future = require('data.future');
const fs = require('fs');
const path = require('path');

module.exports = function getJSON(name) {
  return new Future((rej, res) => (
    setTimeout(() => res(
      JSON.parse(
        fs.readFileSync(
          path.join(process.cwd(), 'data', `${name}.json`)
        ).toString()
      )
    ), 300)
  ));
};