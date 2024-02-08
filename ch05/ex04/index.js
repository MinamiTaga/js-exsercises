
export const fibWhile = () => {
  let numbers = [1, 1]
  let count = 2;
  while (count < 10) {
    numbers[count] = numbers[count - 2] + numbers[count - 1]
    count++;
  }
  return numbers;
}

export const fibDoWhile = () => {
  let numbers = [1, 1]
  let count = 2;
  do {
    numbers[count] = numbers[count - 2] + numbers[count - 1]
    count++;
  } while (count < 10)
  return numbers;
}

export const fibFor = () => {
  let numbers = [1, 1]
  let count = 2;
  for (let i = 2; i < 10; i++) {
    numbers[i] = numbers[i - 2] + numbers[i - 1];
  }
  return numbers;
}
console.log(fibFor())