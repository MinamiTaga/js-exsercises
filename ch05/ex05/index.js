export const evenObject = (obj) => {
  let result = {};
  for (let p in obj) {
    if (obj[p] % 2 === 0) {
      result[p] = obj[p];
    }
  }
  return result;
};
