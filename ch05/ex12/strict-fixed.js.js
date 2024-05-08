function set42(key) {
  eval(`${key} = 42;`);
}

// 例:
let hello; // ここ追加すれば実行できた、コマンドラインではなくても動く
set42("hello");
console.log(hello); // 42
