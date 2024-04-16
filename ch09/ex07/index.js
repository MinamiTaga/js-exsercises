class Animal {

  eat() {
    ...
  }

  makeSound() {
    ...
  }
}

class Dog {
  constructor () {
    this.animal = new Animal();
  }

  bite() {
    ...
  }

  eat() {
    return this.animal.eat()
  }

  makeSound() {
    return this.animal.makeSound()
  }
}

class Husky extends Dog {

  ...
}

class Cat {
  constructor () {
    this.animal = new Animal();
  }

  scratch() {
    ...
  }

  eat() {
    return this.animal.eat()
  }

  makeSound() {
    return this.animal.makeSound()
  }
}

class Bird {
  constructor () {
    this.animal = new Animal();
  }

  fly() {
    ...
  }

  eat() {
    return this.animal.eat()
  }

  makeSound() {
    return this.animal.makeSound()
  }
}

class Fish {
  constructor () {
    this.animal = new Animal();
  }

  swim() {
    ...
  }

  eat() {
    return this.animal.eat
  }
}