const sum = require('./index').sum;
const Animal = require('./index').Animal;

console.log(sum(1, 2))
const animal = new Animal;
console.log(animal.eat())
console.log(animal.fly())