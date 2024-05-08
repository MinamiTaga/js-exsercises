import { TypeMap } from "./index";

test("TypeMap", () => {
  const str = "string";
  const entries = [
    ["a", "b"],
    ["c", "d"],
  ];

  const typeMap = new TypeMap(str, str, entries);

  expect(typeMap.keyType).toBe(str);
  expect(typeMap.valueType).toBe(str);

  expect(() => {
    typeMap.set("abc", 123);
  }).toThrowError("123 is not of type string");

  expect(() => {
    typeMap.set("ab", "cd");
  }).not.toThrowError();

  const num = "number";
  const entries2 = [
    ["a", 3],
    ["c", false],
  ];

  expect(() => {
    new TypeMap(str, num, entries2);
  }).toThrowError("Wrong type for entry [c, false]");
});
