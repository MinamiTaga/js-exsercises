import { wait3, wait2, wait1, log, logA, logB, logC, errX, errY } from './../index.js'

// NOTE: f2 との比較用 (注: () => wait(...) は () => { return wait(...); } と同じことに注意
//
// 回答:
// 3秒後に A が出力され、その2秒後に B が出力され、その1秒後に C が出力される。
//
// 説明:
// wait3 の解決後に logA が実行され、wait2().then(logB) の解決後 (2秒後に B 出力) に wait1().then(logC) が実行されるため。
//
// 図解:
//  wait3
// |---------------|
//                  logA
//                 |-|
//                    wait2
//                   |----------|
//                               logB
//                              |-|
//                                 wait1
//                                |-----|
//                                       logC
//                                      |-|


async function h1() {
  // 予想
  // 実行して３秒後にAが出力、その２秒後にB、その1秒後にCが出力される
  // 
  // 結果
  // 予想通り
  // 
  // 出力
  // A
  // B
  // C

  try {
    await wait3();
    logA();
    await wait2();
    logB();
    await wait1();
    logC();
  } catch (e) {
    log(e.message);
  }
}

function h2() {
  // NOTE: h3 との比較用
  // 予想
  // Xが出力される
  // 
  // 結果
  // 予想通り
  // 
  // 出力
  // X

  new Promise(() => {
    errX();
  }).catch((e) => log(e.message));
}

function h3() {
  // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
  // 予想
  // Promise<pending>が出力される
  // 
  // 結果
  // エラーをcatchできない
  // 
  // 出力
  // minamitaga:js-exsercises minamitaga$ node ch13/ex07/index.js 
  // file:///Users/minamitaga/js-exsercises/ch13/index.js:34
  // throw new Error("X");
  //       ^
  //
  // Error: X
  //   at errX (file:///Users/minamitaga/js-exsercises/ch13/index.js:34:9)
  //   at file:///Users/minamitaga/js-exsercises/ch13/ex07/index.js:82:5
  //   at new Promise (<anonymous>)
  //   at h3 (file:///Users/minamitaga/js-exsercises/ch13/ex07/index.js:81:3)
  //   at file:///Users/minamitaga/js-exsercises/ch13/ex07/index.js:86:1
  //   at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
  //   at async ModuleLoader.import (node:internal/modules/esm/loader:336:24)
  //   at async loadESM (node:internal/process/esm_loader:34:7)
  //   at async handleMainPromise (node:internal/modules/run_main:106:12)
  // 
  // Node.js v18.19.0

  new Promise(async () => {
    errX();
  }).catch((e) => log(e.message));
}

async function h4() {
  // NOTE: 2つの例外は両方 catch できるか？
  // 予想
  // catchできない
  // 1つ目のみcatchされ、Yのエラーが起きる
  // 
  // 結果
  // 予想通り
  // 
  // 出力
  //   file:///Users/minamitaga/js-exsercises/ch13/index.js:37
  //   throw new Error("Y");
  //         ^
  // 
  // Error: Y
  //     at errY (file:///Users/minamitaga/js-exsercises/ch13/index.js:37:9)
  //     at file:///Users/minamitaga/js-exsercises/ch13/ex07/index.js:118:7
  //
  // Node.js v18.19.0

  try {
    const p1 = wait2().then(() => {
      errX();
    });
    const p2 = wait1().then(() => {
      errY();
    });
    await p1;
    await p2;
  } catch (e) {
    log(e.message);
  }
}
