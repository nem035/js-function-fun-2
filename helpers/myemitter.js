const EventEmitter = require('events');
const getJSONSync = require('./get-json-sync');

class MyEmitter extends EventEmitter {

  constructor() {
    super();

    const person = getJSONSync('person');

    setTimeout(() => {
      this.emit('person', person);
    }, 300);
  }
};

module.exports = MyEmitter;