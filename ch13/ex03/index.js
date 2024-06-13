import * as fs from "node:fs";

function mkdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.mkdir(path, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// // ディレクトリ A → B → C を順に作る以下のコード (※ エラーハンドリングは省略) を...
// fs.mkdir("A", () => {
//   fs.mkdir("B", () => {
//     fs.mkdir("C", () => console.log("COMPLETED"));
//   });
// });

// // 以下のように書くことができる
// mkdir("A")
//   .then(() => mkdir("B"))
//   .then(() => mkdir("C"))
//   .then(() => console.log("COMPLETED"));

export function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    })
  })
}

// readdir('./')
// .then(() => readdir('./../'))
// .then(() => readdir('./../../'))

// fs.stat('./')

export function stat(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    })
  })
}

// stat('./')
// .then(() => stat('../../'))