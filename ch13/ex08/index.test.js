import { fetchFirstFileSize, fetchFirstFileSize2, fetchSumOfFileSizes, fetchSumOfFileSizes2 } from ".";


test('fetchFirstFileSizePromises', async () => {
  let result;
  let exp;
  fetchFirstFileSize('./ch13/ex04/index.js', (err, size) => result = size)
  await fetchFirstFileSize2('./ch13/ex04/index.js', (err, size) => exp = size)

  expect(exp).toBe(result)
})

test('fetchSumOfFileSizesPromises', async () => {
  let result;
  let exp;
  fetchSumOfFileSizes('./ch13/ex04/index.js', (err, size) => result = size)
  await fetchSumOfFileSizes2('./ch13/ex04/index.js', (err, size) => result = size)

  expect(exp).toBe(result)
})