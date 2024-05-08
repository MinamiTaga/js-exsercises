const obj = { name: "John", age: 2 };

with (obj) {
  console.log("with");
  console.log(name);
  console.log(age);
}

console.log("not with");
console.log(obj.name);
console.log(obj.age);

// SyntaxError: Strict mode code may not include a with statement
