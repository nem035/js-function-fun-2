const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class MyEmitter extends EventEmitter {

  constructor() {
    super();

    fs
      .readFile(
        path.join(__dirname, 'person.json'),
        (_, person) => {
          this.emit('person', JSON.parse(person.toString()));
        }
      );
  }
};

module.exports = MyEmitter;