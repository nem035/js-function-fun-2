const path = require('path');
const _ = require('ramda');

module.exports = _.curry(
  function load(dir, root, fileNum) {
    const buildFileName = _.concat(root);

    const toArray = (x) => [x];

    const buildFilePathStringArray = _.compose(
      _.concat([__dirname, dir]),
      toArray
    );

    const buildFileDir = _.compose(
      _.reduce(path.join, ''),
      buildFilePathStringArray
    );

    const getFileObj = _.compose(
      require,
      buildFileDir,
      buildFileName
    );

    return getFileObj(fileNum);
  }
);