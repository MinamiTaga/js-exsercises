import { equalArrays } from "./ch07.js";

describe("equalArray", () => {
  it("違う値を渡してもtrueを返す", () => {
    const a = [1, 2, 3];
    const b = [1, 2, "3"];

    // 配列ではないオブジェクトなら全く違ってもtrueがかえる
    expect(equalArrays({ id: 1, name: "abc" }, { name: "123" })).toEqual(true);
    expect(equalArrays([-0], [+0])).toEqual(true);
    expect(equalArrays("123", ["1", "2", "3"])).toEqual(true);
    expect(equalArrays(new Array(1), [undefined])).toEqual(true);

    // これは通らない
    // expect(equalArrays(a, b)).toEqual(true);
  });
});
