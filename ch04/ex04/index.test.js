import { bitCount } from "./index.js";

describe("bitCount", () => {
  it(" 1 であるビットの数を返す", async () => {
    const num1 = 0b111;
    const num2 = 0b1111111111111111111111111111111;
    expect(bitCount(num1)).toBe(3);
    expect(bitCount(num2)).toBe(31);
  });
});
