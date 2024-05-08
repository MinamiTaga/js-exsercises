import { isWeekend, isWeekend2 } from ".";

describe(isWeekend, () => {
  describe("when weekEnd", () => {
    it("returns true", () => {
      expect(isWeekend("土")).toBe(true);
    });
  });

  describe("when not weekEnd", () => {
    it("returns false", () => {
      expect(isWeekend("月")).toBe(false);
    });
  });
});

describe(isWeekend2, () => {
  describe("when weekEnd", () => {
    it("return true", () => {
      expect(isWeekend2("土")).toBe(true);
    });
  });

  describe("when not weekEnd", () => {
    it("returns false", () => {
      expect(isWeekend2("月")).toBe(false);
    });
  });
});
