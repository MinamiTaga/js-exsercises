import { fib } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("fib", () => {
    it("returns fibonatch", () => {
      expect(fib(5)).toBe(5);
      expect(fib(50)).toBe(12586269025);
    });
  });
});
