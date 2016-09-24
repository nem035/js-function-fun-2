const _ = require('ramda');
const Maybe = require('pointfree-fantasy/instances/Maybe');
module.exports = _.curry((x, o) => Maybe(o[x]));