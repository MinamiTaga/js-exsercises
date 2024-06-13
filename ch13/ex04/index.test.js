import { fetchFirstFileSizePromises, fetchFirstFileSize, fetchSumOfFileSizesPromises, fetchSumOfFileSizes } from './index.js'

test('fetchFirstFileSizePromises', async () => {
  let result;
  let exp;
  fetchFirstFileSize('./ch13/ex04/index.js', (err, size) => result = size)
  await fetchFirstFileSizePromises('./ch13/ex04/index.js', (err, size) => exp = size)

  expect(exp).toBe(result)
})

test('fetchSumOfFileSizesPromises', async () => {
  let result;
  let exp;
  fetchSumOfFileSizes('./ch13/ex04/index.js', (err, size) => result = size)
  await fetchSumOfFileSizesPromises('./ch13/ex04/index.js', (err, size) => result = size)

  expect(exp).toBe(result)
})