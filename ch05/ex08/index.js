let x = 0;

for (let i = 1; i <= 5; i++) {
  x = i;
  try {
    throw Error();
  } catch {
    break;
  } finally {
    continue;
  }
}

console.log(x);

// 予想：1が出力される、brake後は流石に戻ってこないと思う
// 結果：5、戻ってきた
