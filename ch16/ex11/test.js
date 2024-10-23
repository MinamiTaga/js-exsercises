import { createConnection } from "net";

for (let i = 1; i < 15000; i++) {
  createConnection({ port: 8000 }, () => console.log(i));
}

// 15000まで接続できた
// 20000は途中でエラー
// https://qiita.com/reioto/items/d5bc1375986b2f84c24e
// https://atmarkit.itmedia.co.jp/bbs/phpBB/viewtopic.php?topic=42677&forum=7

//  ファイルディスクリプタが上限？
// →ファイルディスクリプタの制限は1048575だから違う？
// $ ulimit -n
// 1048575
