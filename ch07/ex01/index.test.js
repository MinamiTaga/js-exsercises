import { mul, add } from ".";

describe("mul", () => {
  it("乗算", () => {
    expect(mul()[2][3]).toEqual(6);
    expect(mul()[0][6]).toEqual(0);
    expect(mul()[9][0]).toEqual(0);
    expect(mul()[7][9]).toEqual(63);
  });
});
describe("add", () => {
  it("加算", () => {
    expect(add()[2][3]).toEqual(5);
    expect(add()[0][6]).toEqual(6);
    expect(add()[9][0]).toEqual(9);
    expect(add()[7][9]).toEqual(16);
  });
});
