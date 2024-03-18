import { prop } from ".";

describe('prop', () => {
  it('プロパティ名の配列を返す', () => {
    const object1 = {};
    const symName = Symbol('property2');

    Object.defineProperty(object1, 'property1', {
      value: 22,
      enumerable: false,
    });

    Object.defineProperty(object1, symName, {
      value: 29,
      configurable: true,
      enumerable: true,
    });

    expect(prop({ a: 1 })).toEqual(['a'])
    expect(prop({ a: 1, b: 9595959 })).toEqual(['a', 'b'])
    expect(prop(object1).length).toEqual(2);
    expect(prop(object1)).toEqual(['property1', symName]);
  })
});