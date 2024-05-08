import { compare } from "./ex03.js";

describe("conpare", () => {
  describe("同じ値を受け取った時", () => {
    it("returns true", () => {
      expect(compare(1, 1)).toBe(true);
    });

    describe("引数が数式を含む場合", () => {
      it("returns true", () => {
        expect(compare(0.1 - 0, 0.1)).toBe(true);
        expect(compare(0.3 - 0.2, 0.1)).toBe(true);
        expect(compare(0.2 - 0.1, 0.1)).toBe(true);
      });
    });
  });

  describe("違う値を受け取った時", () => {
    it("returns false", () => {
      expect(compare(1, 2)).toBe(false);
    });
  });
});
