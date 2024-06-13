import { fetchSumOfFileSizesPA } from "./index.js"
import { fetchSumOfFileSizes } from "./../ex04/index.js"

test('fetchSumOfFileSizesPromises', async () => {
  let result;
  let exp;
  await fetchSumOfFileSizesPA('./ch13/ex04/index.js', (err, size) => result = size)
  await fetchSumOfFileSizes('./ch13/ex04/index.js', (err, size) => result = size)

  expect(exp).toBe(result)
})