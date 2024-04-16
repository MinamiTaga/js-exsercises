import { func1, func2, func3 } from './index'

test('func1', () => {
  expect(func1(2, 'str')).toEqual(['str', 'str']);
  expect(func1(0, 'str')).toEqual([]);
  expect(func1(5, '')).toEqual(['', '', '', '', '']);
})

test('func2', () => {
  expect(func2(9)). toBe(81)
  expect(func2(0)). toBe(0)
  expect(func2(1.2)). toBe(1.44)
})

test('func3', () => {
  const now = new Date;
  expect(func3()).toEqual({now})
})