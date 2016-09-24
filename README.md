# JS-Function-Fun-2

Fun with functional programming in JS.

Continuation of [js-function-fun](https://github.com/nem035/js-function-fun)

# Libraries used

  - [BaconJS](https://baconjs.github.io/)
  - [Data.Either](https://github.com/folktale/data.either)
  - [Data.Future](https://github.com/folktale/data.future)
  - [PointFree Fantasy](https://github.com/DrBoolean/pointfree-fantasy)
  - [Ramda](http://ramdajs.com/)

# PointFree methods

- [map](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L806)

  ```js
  map = curry( (f, u) => u.map(f) )

  // Where u is a Monad that implements the map() method like
  u.map = (f) => new u(f(this.value))
  ```

- [compose](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L780)

  ```js
  compose = curry( (f, g, x) => f(g(x)) )
  ```

- [chain](https://github.com/DrBoolean/pointfree-fantasy/blob/master/dist/pointfree.amd.js#L822)

  ```js
  chain = curry( (f, mv) => mv.chain(f) )

  // Where mv is a Monad that implements the chain() method like
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

  // where map(f,x) returns a Monad with an ap() method defined like
  u.ap = (b) => new u(this.value(b.value))
  ```

# Running the exercises

    node app
