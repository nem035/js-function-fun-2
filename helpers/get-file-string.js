const fs = require('fs');
const getDataPath = require('./get-data-path');

module.exports = (name) => fs.readFileSync(getDataPath(name)).toString();