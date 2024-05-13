import { TypeMap } from "./index.js";

describe("TypeMap", () => {

  class Foo {}

  const typeMap = new TypeMap();

  it('正常系', () => {
    const date = new Date();

    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    typeMap.set(Foo, new Foo());
    typeMap.set(Date, date);

    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
    expect(typeMap.get(Date)).toBe(date);
  })

  it('異常系', () => {
    expect(() => {
      typeMap.set(Date, "not a date");
    }).toThrow();

    expect(() => {
      typeMap.set(Number, null);
    }).toThrow();
  
    expect(() => {
      typeMap.set(String, undefined);
    }).toThrow();
  })





});
