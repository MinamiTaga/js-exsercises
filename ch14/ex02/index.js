export class MyArrayLike {
  constructor(length) {
    this.length = length;
  }

  // これなくてもテスト通る
  *[Symbol.iterator]() {
    let index = 0;
    while (this[index] !== undefined) {
      yield this[index];
      index++;
    }
  }
}

export class MyArray extends Array {
  constructor(items) {
    super(...items);
  }

  static get [Symbol.species]() {
    return MyArrayLike;
  }
}
