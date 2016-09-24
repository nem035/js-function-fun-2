const _ = require('ramda');
const Future = require('data.future');
const fs = require('fs');
const path = require('path');
const timeout = require('./settimeout-pure');

const getJSONSync = require('./get-json-sync');

module.exports = function getJSON(name) {
  return new Future((rej, res) => (
    timeout(() => res(
      getJSONSync(name)
    ))
  ));
};