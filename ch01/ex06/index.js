export const fib = (num) => {
  let numbers = [0, 1];
  let response = 0;
  while (num > 1) {
    response = numbers[0] + numbers[1];
    numbers = [numbers[1], response];
    num--;
  }
  return response;
};
