import { exp } from './index';

test('exp', () => {
  expect(exp(9, 2)).toBe(9**2)
  expect(exp(2, 94)).toBe(2**94)
  expect(exp(5, 0)).toBe(5**0)
  expect(exp(0, 20)).toBe(0**20)
  expect(exp(0, 0)).toBe(0**0)
})