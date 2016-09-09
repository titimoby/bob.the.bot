/* --- stools by @k33g --- */
/* Container */

class Container {
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value })
  }

  static of(x) {
    return new Container(x);
  }

  readable(){
    var clone = Object.assign({value:this.value}, this);
    return {type:this, instance:clone}
  }
}

/* Functor */
class Functor extends Container {
  constructor(x) {
    super(x);
  }

  static of(x) {
    return new Functor(x);
  }
  /*
    A map function: used for chaining operations on Container
  */
  map (fn) {
    //return Functor.of(fn(this.value));
    return new this.constructor(fn(this.value));
  }
}

/* Monad */
class Monad extends Functor {
  constructor(x) {
    super(x);
  }

  static of(x) {
    return new Monad(x);
  }
  /*
  map (fn) {
    return Monad.of(fn(this.value));
  }
  */

  /* So, I'm a monad because I have a bind method */
  bind (fn) {
    return fn(this.value);
  }
}


// ================ MAYBE ================

class None extends Monad {
  constructor() {
    super(null)
  }
  // overrides Functor.map
  map() {
    return this;
  }
  // overrides Monad.map
  bind (fn) {
    return this.value;
  }

  getOrElse(value) {
    return value;
  }

  isNone() {
    return true;
  }
  isSome() {
    return false;
  }

}

class Some extends Monad {
  constructor(x) {
    super(x);
  }
  // overrides Functor.map
  map(fn) {
    let res = fn(this.value);
    if(res == null || res == undefined) {
      return new None()
    }
    return new Some(res);
  }

  getOrElse() {
    return this.value;
  }

  isNone() {
    return false;
  }
  isSome() {
    return true;
  }
}

class Maybe {

  static Some(x) { return new Some(x); }

  static None() { return new None(); }

  static fromNullable(x) {
    return (x !== null && x !== undefined)
      ? Maybe.Some(x)
      : Maybe.None();
  }

  static of(x) { return Maybe.Some(x); }
}

// ================ Either ================
class Left extends Functor { // not a Monad? I'm a lazy guy
  constructor(err) {
    super(err)
  }

  map() { return this; }

  getOrElse(value) {return value; }

  //orElse(fn) { return fn(this.value); }

  cata(leftFn, rightFn) { return leftFn(this.value); }
}

class Right extends Functor {
  constructor(x) {
    super(x);
  }

  map(fn) { return new Right(fn(this.value)); }

  getOrElse() { return this.value; }

  //orElse() { return this; }

  cata(leftFn, rightFn) { return rightFn(this.value); }
}

class Either {

  static Left(x) { return new Left(x); }

  static Right(x) { return new Right(x); }

  /*
  static fromNullable(x) {
    return (x !== null && x !== undefined)
      ? Either.Right(x)
      : Either.Left();
  }
  */

  static of(x) { return Either.Right(x); }
}

// ================ Validation ================


class Success extends Monad {
  constructor(x) {
    super(x);
  }

  //map(fn) { return new Success(fn(this.value)); }

  isSuccess() { return true; }

  isFail() { return false; }

  ap(otherContainer) { // has to be at least a functor - at least

    return otherContainer instanceof Fail
      ? otherContainer
      : otherContainer.map(this.value)
  }

  cata(failureFn, successFn) { return successFn(this.value); }
}


class Fail extends Monad {
  constructor(err) {
    super(err)
  }
  // override
  map() { return this; }

  isSuccess() { return false; }
  isFail() { return true; }

  ap(otherContainer) { // has to be a functor - at least

    return otherContainer instanceof Fail
      ? new Fail(this.value.concat(otherContainer.value))
      : this
  }

  cata(failureFn, successFn) { return failureFn(this.value); }

}

class Validation {
  /*
  constructor(x) {
    const value = x;
    Object.defineProperty(this, "value", { get: () => value }) // sortie
  }
  */

  static Success(x) { return new Success(x); }

  static Fail(x) { return new Fail(x); }

  static of(x) { return Validation.Success(x); }
}

let show = (...args) => {
  let args2shows = []
  let types = ["Container", "Functor", "Monad", "Maybe", "None", "Some", "Either", "Left", "Right", "Validation", "Success", "Fail"]
  let transform = (o) => {
    var clone = Object.assign({value:o.value}, o);
    return {type:o.constructor, instance:clone}
  }

  args.forEach(arg => {
    if(types.find(name => name === arg.constructor.name)) {
      args2shows.push(transform(arg))
    } else {
      args2shows.push(arg)
    }
  })
  console.log(...args2shows)
}

let hr = (title) => {
  if(title) {
    console.log(`-----------------[ ${title} ]-----------------`)
  } else {
    console.log(`----------------------------------------------`)
  }
}

module.exports = {
  Container: Container,
  Functor: Functor,
  Monad: Monad,
  Maybe: Maybe,
  None: None,
  Some: Some,
  Left: Left,
  Right: Right,
  Either: Either,
  Success: Success,
  Fail: Fail,
  Validation: Validation,
  show: show, hr: hr
}
