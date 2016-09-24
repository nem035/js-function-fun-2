const getFileString = require('./get-file-string');
module.exports = (name) => getFileString(`${name}.txt`);