const EventEmitter = require('events');
const getJSONSync = require('./get-json-sync');
const timeout = require('./settimeout-pure');

class MyEmitter extends EventEmitter {

  constructor() {
    super();

    const person = getJSONSync('person');

    timeout(() => {
      this.emit('person', person);
    });
  }
};

module.exports = MyEmitter;