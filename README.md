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

- Monad is a (Pointed) Functor that defines how `of()` applies to it

- Applicative is a (Applied) Functor that defines how `ap()` applies to it

- Semigroup is any data type (Container) that defines how `concat()` (or any combination method) applies to it

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
  ```

- [compose](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L780)

  ```js
  compose = curry( (f, g, x) => f(g(x)) )

  // compose :: (b -> c) -> (a -> b) -> (a -> c)

  // compose() essentially performs a RTL pipe of functions,
  // passing the output of the current function as the input of the next function

  // example
  compose add(3) multiply(5) 2 // 2 * 5 + 3

  // Associative: compose(compose(f, g), h) == compose(f, compose(g, h))

  // compose() is powerful when combined with map
  map(compose(first, reverse), Container("dog")) // "g"
  ```

- [chain](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L822)

  ```js
  chain = curry( (f, mv) => mv.chain(f) )

  // Where mv is a Functor with a chain() defined as
  mv.chain = (f) => f(this.value)
  ```

- [mjoin](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L826)

  ```js
  mjoin = (mmv) => chain(identity, mmv)

  // where identity is a function that just returns its argument
  identity = (x) => x
  ```

- [liftA2](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L814)

  ```js
  liftA2 = curry( (f, x, y) => map(f,x).ap(y) )

  // where map(f,x) returns a Functor with an ap() method defined as
  u.ap = (b) => new u(this.value(b.value))
  ```

- [concat](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L830)

  ```js
  concat = (x, y) => x.concat(y)
  ```

- [mconcat](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L834)

  ```js
  mconcat = (xs, empty) => xs.length ? xs.reduce(concat) : empty()

  // example
  mconcat([toUpperCase, reverse])(['stuff']) // STUFFffuts
  ```

# Running the exercises

    node app
