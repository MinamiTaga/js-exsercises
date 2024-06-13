import * as fs from "node:fs";
import * as path from "node:path";


export async function* walk(rootPath) {
  const dirs = fs.readdirSync(rootPath)

  for (let i = 0; i < dirs.length; i++) {
    const fullPath = path.join(rootPath, dirs[i]);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    yield {
      path: fullPath,
      isDirectory
    };

    if (isDirectory) {
      //yeild*： https://xn--developer-kn3o752i.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/yield*
      yield* walk(fullPath)
    }
  }
}

// // 利用例
// (async () => {
//   // カレントディレクトリ (.) のファイル・フォルダを再帰的に取得し表示する
//   for await (const elem of walk(".")) {
//     console.log(elem);
//   }

//   // NOTE: walk に与えたパスが以下のようなディレクトリ・ファイルを持つ時を考える
//   // .
//   // ├── A
//   // ├── B
//   // │   └── C
//   // │       └── buz.txt
//   // └── foo.txt
//   //
//   // この気 `walk` は以下を返す (順序は任意):
//   // - { path: "A", isDirectory: true }
//   // - { path: "B", isDirectory: true }
//   // - { path: "B/C", isDirectory: true }
//   // - { path: "B/C/buz.txt", isDirectory: false }
//   // - { path: "foo.txt", isDirectory: false }
// })();