export function sort (array) {
  // バブルソート
  const n = array.length;
  let swapped = true;

  while (swapped) {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          if (array[i] > array[i + 1]) {
              const temp = array[i];
              array[i] = array[i + 1];
              array[i + 1] = temp;
              swapped = true;
          }
      }
  }
  return array;
}