1. 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい

- https://envader.plus/course/1/scenario/1007
- https://satori.marketing/marketing-blog/what-is-redirect/#:~:text=%E3%83%AA%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88%E3%81%A8%E3%81%AF%E3%82%B5%E3%82%A4%E3%83%88%E3%82%84,%E3%81%AE%E8%BB%A2%E9%80%81%E3%81%AA%E3%81%A9%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82
- https://wa3.i-3-i.info/word13790.html

### 標準入力

プログラムに入ってくるデータや入力元です。

ほとんどの場合、キーボードが標準入力元のデバイス。

### 標準出力

プログラムの実行結果の出力先です。

一般的にはディスプレイが標準出力先となっています。他にも特定のファイルを出力先として指定することも可能です。

### 標準エラー出力

エラーメッセージの出力先です。こちらも標準出力と同様、ディスプレイが出力先となります。

### リダイレクト

サイトやページなどを新しいURLに変更した際、自動的に転送をする仕組みのこと。
代表的な使用例としてはリニューアルなどに伴うページURLの変更やドメインの変更、PCサイトとスマートフォンサイトのURLが異なる場合の転送などがあります。

### パイプ

コマンドを「|（半角の縦棒）」でつなぐことで前のコマンドの出力を次のコマンドの入力として渡す仕組みのこと。

---

2. 以下のコードを `cat.mjs` というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい

```js
import fs from "fs";

if (process.argv.length > 2) {
  // node cat.js foo.txt といった形式ならばファイルを読み込み標準出力に出力する
  fs.createReadStream(process.argv[2]).pipe(process.stdout);
} else {
  // そうでなければ標準入力を標準出力に出力する
  process.stdin.pipe(process.stdout);
}
```

実験: `file` は適当なファイルとし `invalid-file` は存在しないファイルとしなさい

- `node cat.mjs`
  - 予想: 何も出力されない
  - 結果: 何も出力されない
- `echo FOO | node cat.mjs`
  - 予想: FOOが出力される
  - 結果: FOOが出力される
- `node cat.mjs > output.txt`
  - 予想: 中身が空のoutput.txtが作られる
  - 結果: 中身が空のoutput.txtが作られる
- `node cat.mjs file`
  - 予想: fileの中身が出力される
  - 結果: fileの中身が出力される
- `node cat.mjs file > output.txt`
  - 予想: fileの中身のコピーがoutput.txtという名前で複製される
  - 結果: fileの中身のコピーがoutput.txtという名前で複製される
- `node cat.mjs invalid-file > output.txt`
  - 予想: 空のoutput.txtが作られる
  - 結果: そんなファイルはないというエラーが起きる
- `node cat.mjs invalid-file 2> error.txt`
  - 予想: そんなファイルはないというエラーが起きる
  - 結果: エラーの内容がerror.txtに出力される
