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

// https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%96%E3%83%AB%E3%82%BD%E3%83%BC%E3%83%88
// アルゴリズムが単純で実装も容易である一方、最悪時間計算量は O(n2) と遅いため、一般にはマージソートやヒープソートなど、より最悪時間計算量の小さな（従って高速な）方法が利用される。
// 最悪計算時間	O(n^2)
// 最良計算時間	O(n)
// 平均計算時間	O(n^2)
