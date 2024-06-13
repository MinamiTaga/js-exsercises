import { fetchFirstFileSizePromises, fetchFirstFileSize, fetchSumOfFileSizesPromises, fetchSumOfFileSizes } from './index.js'

test('fetchFirstFileSizePromises', async () => {
  const result = fetchFirstFileSize('./ch13/ex04/index.js', () => {})
  const exp = await fetchFirstFileSizePromises('./ch13/ex04/index.js', () => {})

  expect(exp).toBe(result)
})

test('fetchSumOfFileSizesPromises', async () => {
  const result = fetchSumOfFileSizes('./ch13/ex04/index.js', () => {})
  const exp = await fetchSumOfFileSizesPromises('./ch13/ex04/index.js', () => {})

  expect(exp).toBe(result)
})