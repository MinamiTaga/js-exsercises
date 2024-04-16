export class C {
  x = 42;

  getX() {
    return this.x;
  }
}

export class PrivateC {
  #x = 42;

  getX() {
    return this.#x;
  }
}

export class ClosureC {

  getX() {
    let x = 42;
    return x;
  }
}