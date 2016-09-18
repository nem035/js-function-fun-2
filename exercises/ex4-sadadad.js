const {
  log
} = require('../log');
const {
  assertEqual,
  assertDeepEqual,
  inspectIt
} = require('./test');

const _ = require('ramda');
const {
  map,
  compose
} = require('pointfree-fantasy');
const Maybe = require('pointfree-fantasy/instances/maybe');
const {
  Identity
} = require('pointfree-fantasy/instances/identity');

const {
  Left,
  Right
} = require('data.either');
const {
  IO,
  runIO,
  extendFunctionPrototype
} = require('../custom/io');

extendFunctionPrototype();

module.exports = function ex4() {

  // challenge 1
  // ==========
  // Write a function that uses checkActive() and showWelcome() to grant access or return the error
  log("--------Start challenge 1--------")

  const showWelcome = compose(_.add("Welcome "), _.prop('name'))

  const checkActive = function(user) {
    return user.active ? Right(user) : Left('Your account is not active')
  }

  const ex1 = compose(map(showWelcome), checkActive);

  assertDeepEqual(Left('Your account is not active'), ex1({
    active: false,
    name: 'Gary'
  }))
  assertDeepEqual(Right('Welcome Theresa'), ex1({
    active: true,
    name: 'Theresa'
  }))
  log("challenge 1...ok!")

  // challenge 2
  // ==========
  // Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise
  log("--------Start challenge 2--------")

  const ex2 = function(x) {
    return x.length > 3 ? Right(x) : Left("You need > 3");
  }

  assertDeepEqual(Right("fpguy99"), ex2("fpguy99"))
  assertDeepEqual(Left("You need > 3"), ex2("..."))
  log("challenge 2...ok!")

  // challenge 3
  // ==========
  // Use ex2 above and Either as a functor to save the user if they are valid

  const save = function(x) {
    log("SAVED USER!");
    return x;
  }

  const ex3 = compose(map(save), ex2)

  log("--------Start challenge 2--------")
  assertDeepEqual(Right("fpguy99"), ex3("fpguy99"))
  assertDeepEqual(Left("You need > 3"), ex3("duh"))
  log("challenge 3...ok!")

  // challenge 4
  // ==========
  // Get the text from the input and strip the spaces
  log("--------Start challenge 4--------")

  const document = {
    querySelector() {
      return {
        value: '  happy   face'
      };
    }
  };

  const getValue = function(x) {
    return document.querySelector(x).value
  }.toIO()
  const stripSpaces = function(s) {
    return s.replace(/\s+/g, '');
  }

  const ex4 = compose(map(stripSpaces), getValue);

  assertEqual("happyface", runIO(ex4('#text')))
  log("challenge 4...ok!")

  // challenge 5
  // ==========
  // Use getHref() / getProtocol() and runIO() to get the protocal of the page.

  const location = {
    href: 'http://functionalprogrammingisfun.com'
  };

  const getHref = function() {
    return location.href;
  }.toIO();
  const getProtocol = compose(_.head, _.split('/'))
  const ex5 = compose(map(getProtocol), getHref);

  log("--------Start challenge 5--------")
  assertEqual('http:', runIO(ex5(null)));
  log("challenge 5...ok!");

  // challenge 6*
  // ==========
  // Write a function that returns the Maybe(email) of the User from getCache(). Don't forget to JSON.parse once it's pulled from the cache so you can _.prop() the email

  // setup...
  const localStorage = {
    user: JSON.stringify({
      email: "nem@jsislife.net"
    })
  };

  const getCache = function(x) {
    return Maybe(localStorage[x]);
  }.toIO();
  const getEmail = compose(_.prop('email'), JSON.parse);
  const ex6 = compose(map(map(getEmail)), getCache);

  assertDeepEqual(Maybe("nem@jsislife.net"), runIO(ex6('user')))
  log("challenge 6...ok!")
};