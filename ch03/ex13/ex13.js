class Example {

  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `${this.value}`;
  }
}

let obj = new Example(100000);
console.log(obj+ 25)
console.log(String(obj))
