import { instanceOf } from "./index";

test("instanceOf()", () => {

  class A {}
  class B extends A {}
  class C extends B{}
  const objA = new A();
  const objB = new B();
  const objC = new C();

  expect(instanceOf(objA, A)).toBe(true);
  expect(instanceOf(objA, C)).toBe(false);
  expect(instanceOf(objB, B)).toBe(true);
  expect(instanceOf(objB, A)).toBe(true); 
  expect(instanceOf(objB, C)).toBe(false); 
  expect(instanceOf(objC, C)).toBe(true);
  expect(instanceOf(objC, B)).toBe(true);
  expect(instanceOf(objC, A)).toBe(true);
});