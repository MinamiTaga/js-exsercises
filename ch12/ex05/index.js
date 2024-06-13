import * as fs from "node:fs";

// https://www.pxt.jp/ja/diary/article/268/
export async function* readLines(filePath) {
  let bytesRead;
  let over = '';
  let openFile;

  try {
    // rは読み取り専用
    openFile = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(1024);
    while ((bytesRead = fs.readSync(openFile, buffer, 0, 1024, null)) !== 0) {
      // 前回読み取りの残りがあればそこに連結
      over += buffer.toString('utf8', 0, bytesRead);
      const lines = over.split("\n");
      console.log(lines)

      over = lines.pop();
      
      for (const line of lines) {
        yield line;
      }
    }

    // overがまだ何か保持していれば、最後にそれだけ返す
    if (over) {
      yield over;
    }
  } finally {
    fs.closeSync(openFile);
  }
}

// const rl = readLines('./ch12/ex05/sample.txt')
// console.log(1, await rl.next())
// console.log(2, await rl.next())
// console.log(3, await rl.next())
// console.log(4, await rl.next())
// console.log(5, await rl.next())
// console.log(6, await rl.next())