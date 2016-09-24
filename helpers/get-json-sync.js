const getFileString = require('./get-file-string');
module.exports = (name) => JSON.parse(getFileString(`${name}.json`));