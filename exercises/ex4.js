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

  // Exercise 1
  // ==========
  // Write a function that uses checkActive() and showWelcome() to grant access or return the error
  console.log("--------Start exercise 1--------")

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
  console.log("exercise 1...ok!")



  // Exercise 2
  // ==========
  // Write a validation function that checks for a length > 3. It should return Right(x) if it is greater than 3 and Left("You need > 3") otherwise
  console.log("--------Start exercise 2--------")

  const ex2 = function(x) {
    return x.length > 3 ? Right(x) : Left("You need > 3");
  }


  assertDeepEqual(Right("fpguy99"), ex2("fpguy99"))
  assertDeepEqual(Left("You need > 3"), ex2("..."))
  console.log("exercise 2...ok!")





  // Exercise 3
  // ==========
  // Use ex2 above and Either as a functor to save the user if they are valid

  const save = function(x) {
    console.log("SAVED USER!");
    return x;
  }

  const ex3 = compose(map(save), ex2)

  console.log("--------Start exercise 2--------")
  assertDeepEqual(Right("fpguy99"), ex3("fpguy99"))
  assertDeepEqual(Left("You need > 3"), ex3("duh"))
  console.log("exercise 3...ok!")






  // Exercise 4
  // ==========
  // Get the text from the input and strip the spaces
  console.log("--------Start exercise 4--------")

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
  console.log("exercise 4...ok!")





  // Exercise 5
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

  console.log("--------Start exercise 5--------")
  assertEqual('http:', runIO(ex5(null)))
  console.log("exercise 5...ok!")





  // Exercise 6*
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
  console.log("exercise 6...ok!")








  // TEST HELPERS
  // =====================
  function inspectIt(x) {
    return (x.inspect && x.inspect()) || (x.toString && x.toString()) || x.valueOf(); //hacky for teachy.
  }

  function assertEqual(x, y) {
    if (x !== y) {
      throw ("expected " + x + " to equal " + y);
    }
  }

  function assertDeepEqual(x, y) {
    if (x.val !== y.val) throw ("expected " + inspectIt(x) + " to equal " + inspectIt(y));
  }
};