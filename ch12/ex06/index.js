import * as fs from "node:fs";
import * as path from "node:path";


export function* walk(rootPath) {
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

// const waaa = walk('./');
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
// console.log(waaa.next())
