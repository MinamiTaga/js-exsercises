// このような関数は絶対に書いてはならない。
function set42(key) {
  eval(`${key} = 42;`);
}

// 例:
let hello; // ここ追加すれば実行できた、コマンドラインではなくても動く
set42("hello");
console.log(hello); // 42

// 引数に関数を渡すとその関数が実行される。なので、無限ループのような関数を渡すとシステムに負荷がかかり、最悪の場合システムがダウンしてしまうこともある。
// getEmail(),getPassword()のようなセキュリティ情報を取り出すような関数を渡すことで情報を盗み出すことができる