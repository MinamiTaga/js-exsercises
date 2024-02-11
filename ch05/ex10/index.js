
const obj = {name: 'John', age: 2};

console.log('not with');
console.log(obj.name);
console.log(obj.age);


with (obj) {
  console.log('with');
  console.log(name);
  console.log(age);
}
// SyntaxError: Strict mode code may not include a with statement