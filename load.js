const path = require('path');
const _ = require('ramda');

module.exports = function getFiles(dir, root, fileNums) {

  const buildFileName = _.concat(root);
  const buildFileDir = (name) => path.join(__dirname, dir, name);
  const loadFile = require;
  const toFileObj = (file) => ({
    [`${dir}-${file.name}`]: file
  });

  const getFileObj = _.compose(
    toFileObj,
    loadFile,
    buildFileDir,
    buildFileName
  );

  return _.mergeAll(_.map(getFileObj, fileNums));
};