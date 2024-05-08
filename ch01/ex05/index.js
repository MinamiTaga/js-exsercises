export const abs = (num) => {
  return Math.abs(num);
};

export const sum = (array) => {
  let sum = 0;
  for (const x of array) {
    sum += x;
  }
  return sum;
};

// 階乗
export const factorial = (num) => {
  let product = 1;
  while (num > 1) {
    product *= num;
    num--;
  }
  return product;
};
