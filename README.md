# JS-Function-Fun-2

Fun with functional programming in JS.

Continuation of [js-function-fun](https://github.com/nem035/js-function-fun)

# Libraries used

  - [BaconJS](https://baconjs.github.io/)
  - [Data.Either](https://github.com/folktale/data.either)
  - [Data.Future](https://github.com/folktale/data.future)
  - [PointFree Fantasy](https://github.com/DrBoolean/pointfree-fantasy)
  - [Ramda](http://ramdajs.com/)

# Definitions

- Functor is any data type (Container) that defines how `map()` applies to it.

- Monad is a (Pointed) Functor that defines how `of()`, `mjoin()` and `chain()` apply to it

- Applicative is a (Applied) Pointed Functor that defines how `ap()` applies to it

- Semigroup is any data type (Container) that defines how `concat()` applies to it

- Monoid is a Semigroup that defines how `empty()` applies to it.

# PointFree methods

- [map](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L806)

  ```js
  map = curry( (f, u) => u.map(f) )

  // Where u is a Functor with a map() defined as
  u.map = (f) => new u(f(this.value))

  // map takes a Function and a Functor and returns a new Functor
  // map:: (a -> b) -> fa -> fb

  // example
  map add(3) Functor(2) // Functor(5)

  // map() essentially unwraps a value from the Functor context,
  // applies the passed in Function to that value,
  // and rewraps it back in the Functor context

  // Laws

  // identity
  map(id) == id

  // composition
  compose(map(f), map(g)) == map(compose(f, g))
  ```

- [compose](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L780)

  ```js
  compose = curry( (f, g, x) => f(g(x)) )

  // compose :: (b -> c) -> (a -> b) -> (a -> c)

  // compose() essentially performs a RTL pipe of functions,
  // passing the output of the current function as the input of the next function

  // example
  compose add(3) multiply(5) 2 // 2 * 5 + 3

  // compose() is powerful when combined with map
  map(compose(first, reverse), Container("dog")) // "g"

  // Laws

  // left identity
  compose(id, f) == f

  // right identity
  compose(f, id) == f

  // associativity
  compose(compose(f, g), h) == compose(f, compose(g, h))

  ```

- [of](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L842)

  ```js
  of = (x) => x.of

  Array.of(1, 2) // [1, 2]
  ```

- [mjoin](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L826)

  ```js
  mjoin = (mmv) => chain(id, mmv)

  // mjoin :: M M a -> M a

  // example
  compose(map(map(add(3))), Container(Container))(2) // Container(5)
  // is the same as
  compose(mjoin, add(3), Container(Container))(2) // Container(5)
  ```

- [chain](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L822)

  ```js
  chain = curry( (f, mv) => mv.chain(f) )

  // chain :: (a -> M b) -> M a -> M b

  // Where mv is a Functor with a chain() defined as
  mv.chain = (f) => f(this.value)

  // we can think of chain as a composition of mjoin() and map()
  chain = (f) => compose(mjoin, map(f)) // flattens out the map

  // example
  compose(map(map(log), Container(Container))(2) // logs '2'
  // is the same as
  compose(mjoin, log, Container(Container))(2) // logs '2'
  ```

- [ap](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L810)

  ```js
  ap = curry( (a1, a2) => a1.ap(a2) )

  // ap :: A (a -> b) -> A a -> A b

  // example
  Container.of(f).ap(Container(x)).ap(Container(y))   // Container(f(x, y))
  Container.of(add).ap(Container(1)).ap(Container(3)) // Container(4)

  // Laws

  // identity
  A(id).ap(m) == m

  // composition
  A(compose).ap(f).ap(g).ap(w) == f.ap(g.ap(w)))

  // homomorphism
  A(f).ap(A(x)) == A(f(x))

  // interchange
  u.ap(A(y)) == A((f) => f(y)).ap(u)
  ```

- [liftA2](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L814)

  ```js
  liftA2 = curry( (f, x, y) => map(f,x).ap(y) )

  // where map(f,x) returns a Functor with an ap() method defined as
  u.ap = (b) => new u(this.value(b.value))

  // example
  Maybe.of(save).ap(getVal('#email')).ap(getVal('#password'))
  // is the same as
  liftA2(save, getVal('#email'), getVal('#password'))
  ```

- empty

  ```js
    // returns a default "empty" value for the type
    Array.empty()    // []
    String.empty()   // ''
  ```

- [concat](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L830)

  ```js
  concat = (x, y) => x.concat(y)

  // example
  concat([1, 2], [3, 4]) // [1, 2, 3, 4]

  // Laws

  // left identity
  concat(empty, x) == x

  // right identity
  concat(x, empty) == x

  // associativity
  concat(concat(x, y), z) == concat(x, concat(y, z))
  ```

- [mconcat](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L834)

  ```js
  mconcat = (xs, empty) => xs.length ? xs.reduce(concat) : empty()

  // example
  mconcat([toUpperCase, reverse])(['stuff']) // STUFFffuts

  // validation example
  const checkValidations = mconcat([checkPassword, checkEmail, checkUsername]);
  checkValidations({ name: 'Bob' }) // ['missing password', 'missing email']
  ```

# Running the exercises

    node app
