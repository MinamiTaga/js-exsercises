import { evenObject } from ".";

describe(evenObject, () => {
  it("returns only even value", () => {
    expect(evenObject({ a: 1, b: 2, c: 3 })).toEqual({ b: 2 });
    expect(evenObject({ a: 1, b: 2, c: 50 })).toEqual({ b: 2, c: 50 });
    expect(evenObject({ a: 1, c: 3 })).toEqual({});
  });
});
