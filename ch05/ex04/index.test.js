import { fibWhile, fibDoWhile, fibFor } from ".";

describe("fib", () => {
  const response = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  describe(fibWhile, () => {
    it("returns fibonatch", () => {
      expect(fibWhile()).toEqual(response);
    });
  });
  describe(fibDoWhile, () => {
    it("returns fibonatch", () => {
      expect(fibDoWhile()).toEqual(response);
    });
  });
  describe(fibFor, () => {
    it("returns fibonatch", () => {
      expect(fibFor()).toEqual(response);
    });
  });
});
