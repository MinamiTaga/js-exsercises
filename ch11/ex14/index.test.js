import { sortJapanese, toJapaneseDateString } from "./index.js";

test('sortJapanese', () => {

  expect(sortJapanese(['あ', 'い', 'が', 'か', 'ア'])[0]).toBe(['あ', 'ア', 'い', 'が', 'か'][0]);
  expect(sortJapanese(['あ', 'い', 'が', 'か', 'ア'])[1]).toBe(['あ', 'ア', 'い', 'が', 'か'][1]);
  expect(sortJapanese(['あ', 'い', 'が', 'か', 'ア'])[2]).toBe(['あ', 'ア', 'い', 'が', 'か'][2]);
  expect(sortJapanese(['あ', 'い', 'が', 'か', 'ア'])[3]).toBe(['あ', 'ア', 'い', 'が', 'か'][3]);
  expect(sortJapanese(['っ', 'つ'])[0]).toBe(['っ', 'つ'][0]);
  expect(sortJapanese(['っ', 'つ'])[1]).toBe(['っ', 'つ'][1]);
})

test('toJapaneseDateString', () => {
  const today = new Date();
  const birthday = new Date(1999, 7, 4);

  // expect(toJapaneseDateString(today)).toBe('令和6年5月9日');
  expect(toJapaneseDateString(birthday)).toBe('平成11年8月4日');
})