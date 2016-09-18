const _ = require('ramda');

module.exports = function ex2() {
  /******************************************
      C O M P O S I T I O N  E X A M P L E
  ******************************************/

  // Curried functions are easy to compose.
  // Using _.map, _.length, and _.split we can
  // make a function that returns the lengths
  // of the words in a string.

  const lengths = _.compose(
    _.map(_.length), _.split(' ')
  );
  console.log(lengths('once upon a time'));

  /*******************************************
                 Y O U R  T U R N
  ********************************************/

  const articles = [{
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  }, {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }];

  // -- Challenge 1 -------------------------
  // Return a list of the author names in
  // articles using only get, _.compose, and
  // _.map.

  const names = _.map(_.compose(_.prop('name'), _.prop('author')));
  assertEqualArrays(
    ['Debbie Downer', 'Caspar Milquetoast'],
    names(articles)
  );

  // -- Challenge 2 -------------------------
  // Make a boolean function that says whether
  // a given person wrote any of the articles.
  // Use the names function you wrote above
  // with _.compose and _.contains.

  const isAuthor = function(name, list) {
    return _.compose(_.contains(name), names)(list);
  };

  _.compose(_.contains, names);
  assertEqual(
    false,
    isAuthor('New Guy', articles)
  );
  assertEqual(
    true,
    isAuthor('Debbie Downer', articles)
  );

  // -- Challenge 3 -------------------------
  // There is more to point-free programming
  // than compose! Let's build ourselves
  // another function that combines functions
  // to let us write code without glue constiables.

  const fork = _.curry(function(lastly, f, g, x) {
    return lastly(f(x), g(x));
  });

  // As you can see, the fork function is a
  // pipeline like compose, except it duplicates
  // its value, sends it to two functions, then
  // sends the results to a combining function.
  //
  // Your challenge: implement a function to
  // compute the average values in a list using
  // only fork, _.divide, _.sum, and _.length.

  const avg = fork(_.divide, _.sum, _.length);
  assertEqual(3, avg([1, 2, 3, 4, 5]));

  console.log("All tests pass.");

  /******************************************
          B A C K G R O U N D  C O D E
  *******************************************/

  function assertEqualArrays(x, y) {
    if (x.length !== y.length)
      throw ("expected " + x + " to equal " + y);
    for (const i in x) {
      if (x[i] !== y[i]) {
        throw ("expected " + x + " to equal " + y);
      }
    }
  }

  function assertEqual(x, y) {
    if (x !== y)
      throw ("expected " + x + " to equal " + y);
  }
};