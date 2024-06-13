
import fs from 'fs';
import { readLines } from './index.js';
import { jest } from '@jest/globals';

jest.spyOn(fs, "closeSync");

test("readLines", async () => {
  const path = './ch12/ex05/sample.txt'
  const spy = jest.spyOn(fs, "closeSync");;

  const rl = readLines(path);

  const next1 = await rl.next();
  expect(next1.value).toBe('あいうえお')
  expect(next1.done).toBe(false)

  const next2 = await rl.next();
  expect(next2.value).toBe('かきくけこ')
  expect(next2.done).toBe(false)

  const next3 = await rl.next();
  expect(next3.value).toBe('sashisuseso')
  expect(next3.done).toBe(false)

  const next4 = await rl.next();
  expect(next4.value).toBe('12345')
  expect(next4.done).toBe(false)

  const next5 = await rl.next();
  expect(next5.value).toBe('tachituteto')
  expect(next5.done).toBe(false)

  const next6 = await rl.next();
  expect(next6.value).toBe(undefined)
  expect(next6.done).toBe(true)

  expect(spy).toHaveBeenCalledTimes(8);
})