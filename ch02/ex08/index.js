console.log("Hello World");
console.log("Hello World");
console.log("Hello World");

const method = () => {
  console.log("Hello World");
};

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
console.log(obj + 25);
