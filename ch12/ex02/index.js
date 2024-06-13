export function* fibonacciSequence() {
  let x = 0, y = 1;
  for (; ;) {
    yield y;
    [x, y] = [y, x + y]; // 分割代入
  }
}

const fib = fibonacciSequence()
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.return(4))
console.log(fib.next())
console.log(fib.next())
// console.log([...fibonacciSequence()])

export function fibonacci2() {
  let x = 0, y = 1;
  return {
    next: function () {
      [x, y] = [y, x + y]; // 分割代入
      return {value: x, done: false};
    },

    return: function (val) {
      return {value: val, done: true}
    }
  }
}

const fib2 = fibonacci2()
console.log(fib2.next())
console.log(fib2.next())
console.log(fib2.next())
console.log(fib2.next())
console.log(fib2.next())
console.log(fib2.next())