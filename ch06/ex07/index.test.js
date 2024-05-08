import { assign } from ".";

describe(assign, () => {
  it("プロパティ名の配列を返す", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 93 };
    const obj3 = {};

    Object.defineProperty(obj3, "property1", {
      value: 22,
      enumerable: false,
    });
    const symname = Symbol("property2");
    Object.defineProperty(obj3, symname, {
      value: 29,
      configurable: true,
      enumerable: true,
    });
    const obj4 = { a: 54, g: 99 };
    const defaultObj = { a: 0, b: 0 };

    expect(assign(obj1)).toEqual(Object.assign(obj1));
    expect(assign(obj1, obj2)).toEqual(Object.assign(obj1, obj2));
    expect(assign(obj1, obj2, obj3)).toEqual(Object.assign(obj1, obj2, obj3));
    expect(assign(obj1, obj2, obj3, obj4)).toEqual(
      Object.assign(obj1, obj2, obj3, obj4),
    );
    expect(assign(obj1, defaultObj)).toEqual(Object.assign(obj1, defaultObj));
  });
});
