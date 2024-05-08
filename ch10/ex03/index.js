const sum = (x, y) => x + y;
const square = x => x * x;

class Animal {
  eat() {
    return '食べた';
  }
  fly() {
    return '飛んだ';
  }
}

module.exports = { sum, Animal }