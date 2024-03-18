function fizzbuzz(n) {
  [...Array(n).keys()].map(i => i + 1).forEach((i) => {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  })
}

function sumOfSquaredDifference(f, g) {
  let result = 0;
  f.forEach((_, i) => {
    result += (f[i] - g[i]) ** 2;
  })

  return result;
}

function sumOfEvensIsLargerThan42(array) {
  let sum = 0;
  array.forEach((value) => {
    if (value % 2 === 0) {
      sum += value;
    };
  })

  return Boolean(sum >= 42);
}
