import { getPrimeNumbers } from "./index.js";

test('getPrimeNumbers', () => {
  const pn = getPrimeNumbers();

  expect(pn.next().value).toBe(2)
  expect(pn.next().value).toBe(3)
  expect(pn.next().value).toBe(5)
  expect(pn.next().value).toBe(7)
  expect(pn.next().value).toBe(11)
  expect(pn.next().value).toBe(13)
  expect(pn.next().value).toBe(17)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
  expect(pn.next().done).toBe(false)
})