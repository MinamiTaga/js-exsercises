// N 回何もしないループの時間を返す
function costOfLoop(N) {
  const start = performance.now();
  for (let i = 0; i < N; i++) {}
  const end = performance.now();
  return end - start;
}

// N 回 "Hello".length を実行 + N 回何もしないループの時間を返す
function costOfLengthPlusLoop(N) {
  const str = "Hello";
  let res = 0;
  const start = performance.now();
  for (let i = 0; i < N; i++) {
    res = str.length;
  }
  const end = performance.now();

  if (res !== 5) {
    throw new Error("something is wrong");
  }
  return end - start;
}

// "Hello".length 1回あたりの時間を返す
function costOfLength(N) {
  const lhs = costOfLengthPlusLoop(N);
  const rhs = costOfLoop(N);
  return (lhs - rhs) / N;
}

// 以下を変更して実験しなさい
console.log(costOfLength(10000));     // 0.000007274898886680603
console.log(costOfLength(100000));    // 0.000007479580044746399 1番長い
console.log(costOfLength(1000000));   // 5.708009004592896e-9 1番短い
console.log(costOfLength(10000000));  // 1.714170128107071e-8
console.log(costOfLength(100000000)); // 3.943999990820885e-8

// costOfLength の引数の値を大きくすれば大きくする程結果が小さくなるわけではない
// 何回もやってみると、時間のかかる順番が入れ替わったりする（数字が大きい方が起こりやすい）→何度も関数を呼び出す中でごちゃごちゃになってバグっている？

