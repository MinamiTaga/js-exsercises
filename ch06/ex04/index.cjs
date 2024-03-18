const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

Object.defineProperty(object1, 'property2', {
  value: 22,
  writable: true,
  enumerable: false,
});

Object.defineProperty(object1, 'property3', {
  value: 29,
  writable: true,
  configurable: false,
});

console.log(object1.property1);
console.log(object1.property2);
console.log(object1.property3);
console.log(object1)

// 変更
object1.property1 = 77;
object1.property2 = 77;
object1.property3 = 77;

console.log(object1.property1); // 変更できた
console.log(object1.property2);
console.log(object1.property3);
console.log(object1)

console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('property2')); // true
console.log(object1.hasOwnProperty('property3')); // true
console.log(object1.propertyIsEnumerable('property1')); // true
console.log(object1.propertyIsEnumerable('property2')); // false
console.log(object1.propertyIsEnumerable('property3')); // true

// 削除
delete object1.property1
delete object1.property2
delete object1.property3

console.log(object1.property1);
console.log(object1.property2);
console.log(object1.property3); // 消えた
console.log(object1)
console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('property2')); // true
console.log(object1.hasOwnProperty('property3')); // true
console.log(object1.propertyIsEnumerable('property1')); // false
console.log(object1.propertyIsEnumerable('property2')); // false
console.log(object1.propertyIsEnumerable('property3')); // false
