function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

f("new Date()"); // Hello, Thu Mar 28 2024 15:52:43 GMT+0900 (日本標準時)

// 引数に渡した文字列がそのまま実行されて、出力されるのでevalと同じような危険性がある。
// つまり、無限ループ分を渡してシステムに負荷を与えたり、セキュリティ情報を盗むようなこともできうる。

f('"Becky"; while (true) console.log("あああ")'); // return後だから実行されてない
// while (true) console.log('dhdhhdhdhdhd')
