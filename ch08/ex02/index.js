export const exp = (x, n) => {
  let num = 1;
  for (let i = 0; i < n; i++) {
    num = num * x;
  }
  return num;
};
