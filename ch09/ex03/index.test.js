import { C, PrivateC, ClosureC } from "./index"; // ts でも可

test("private C", () => {
  const c = new C();
  expect(c.x).toBe(42);
  expect(c.getX()).toBe(42);

  const pc = new PrivateC();
  expect(pc.x).toBe(undefined);
  expect(pc.getX()).toBe(42);

  const cc = new ClosureC();
  expect(cc.x).toBe(undefined);
  expect(cc.getX()).toBe(42);
});
