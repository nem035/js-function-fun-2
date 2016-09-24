const {
  map,
  compose
} = require('pointfree-fantasy');
const {
  Bacon
} = require('baconjs');

// Turn the person events into a stream of the 
// of <person>person.name</person> strings
const toPersonString = ({
  name
}) => `<person>${name}</person>`;

const Emitter = require('../helpers/myemitter');

module.exports = function ex20() {
  const personEvents = Bacon.fromEvent(new Emitter(), 'person');
  const personStrings = personEvents.map(toPersonString);
  return personStrings;
};