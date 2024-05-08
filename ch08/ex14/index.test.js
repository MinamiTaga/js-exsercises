import { any, catching } from "./index";

test("any", () => {
  const isNonZero = any(
    (n) => n > 0,
    (n) => n < 0,
  );

  expect(isNonZero(0)).toBe(false);
  expect(isNonZero(42)).toBe(true);
  expect(isNonZero(-0.5)).toBe(true);
});

test("catching", () => {
  const safeJsonParse = catching(JSON.parse, (e) => {
    return { error: e.toString() };
  });

  expect(safeJsonParse('{"a": 1}')).toEqual({ a: 1 });
  expect(safeJsonParse("{Invalid Json}")).toEqual({
    error: "SyntaxError: Unexpected token I in JSON at position 1",
  });
});
