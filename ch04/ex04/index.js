export function bitCount(num) {
  let result = 0;
  const bitNum = num.toString(2);
  for (let i = 0; i <= bitNum.length; i++) {
    if (bitNum[i] === "1") {
      result++;
    }
  }
  return result;
}
