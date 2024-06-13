import { readdir, stat } from "./index.js";
import * as fs from 'node:fs'
;
test('readdir',async () => {
  const path = './'
  const result = fs.readdirSync(path);
  const exp = await readdir(path)
  console.log(result, exp)
  expect(exp.toString()).toBe(result.toString())
})

test('stat',async () => {
  const path = './'
  const result = fs.statSync(path);
  const exp = await stat(path)
  expect(exp.toString()).toBe(result.toString())
})