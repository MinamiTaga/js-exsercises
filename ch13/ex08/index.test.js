import { fetchFirstFileSize, fetchFirstFileSize2, fetchSumOfFileSizes, fetchSumOfFileSizes2 } from ".";

test('fetchFirstFileSize',async () => {
  const path = './ch13/index.js'
  const callback = () => {}

  expect(await fetchFirstFileSize2(path, callback)).toBe(fetchFirstFileSize(path, callback))
})

test('fetchSumOfFileSizesPromises', async () => {
  const path = './ch13/index.js'
  const callback = () => {}

  expect(await fetchSumOfFileSizes2(path, callback)).toBe(fetchSumOfFileSizes(path, callback))
})