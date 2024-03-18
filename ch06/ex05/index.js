const obj = {name: 'John', 1: 'abc', age: 1};
const obj2 = Object.create(obj);

Object.defineProperty(obj2, 'age', {
  value: 24,
  enumerable: false 
});

for (let key in obj2) {
  console.log(key, obj2[key]);
}
// 1 abc
// name John