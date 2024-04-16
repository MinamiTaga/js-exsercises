import { sequenceToObject } from './index'

test('sequesnceToObject', () => {
  const arr = ['a', 1, 'b', 2];

  expect(sequenceToObject('a', 1, 'b', 2)).toEqual({ a: 1, b: 2 });
  expect(sequenceToObject(...arr)).toEqual({ a: 1, b: 2 });
  expect(sequenceToObject('a', [1, 2], 'b', 2)).toEqual({ a: [1, 2], b: 2 });
  expect(sequenceToObject('a', 'abc', 'b', 'bcd')).toEqual({ a: 'abc', b: 'bcd' });
  expect(sequenceToObject('a', 1, 'a', 2)).toEqual({ a: 2 });
  expect(sequenceToObject('', 1)).toEqual({ '': 1 });
  expect(sequenceToObject('a', '')).toEqual({ a: '' });
  expect(sequenceToObject('a', undefined)).toEqual({ a: undefined });

  expect(() => {
    sequenceToObject('a', 2, 'b')
  }).toThrowError()
  expect(() => {
    sequenceToObject(1, 2, 3, 4)
  }).toThrowError()
})