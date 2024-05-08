const obj = { name: "John", age: 18 };

const obj2 = Object.create(obj);
console.log(Object.getPrototypeOf(obj2));
