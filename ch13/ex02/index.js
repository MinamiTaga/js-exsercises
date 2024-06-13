import { wait, wait1, wait2, wait3, log, logA, logB, logC, errX, errY } from '../index.js'

function f1() {
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
  wait3()
    .then(logA)
    .then(() => wait2().then(logB))
    .then(() => wait1().then(logC));
}

function f2() {
  // NOTE: 2つ目の then の中で return が無くなっていることに注意 (典型的なミス)
  //
  // 解答例:
  // 3秒後に A が出力され、その1秒後に C が出力され、その1秒後に B が出力される。
  // 2つ目の .then のコールバック関数が値を return していないため、この .then が返す Promise は即解決される。
  // このため logA() の実行すぐ後に wait1().then(...) が実行され C が先に出力される。
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
  //                  wait1
  //                 |-----|
  //                        logC
  //                       |-|
  wait3()
    .then(logA)
    .then(() => {
      wait2().then(logB)
    })
    .then(() => wait1().then(logC));
}

function f3() {
  // NOTE: then のコールバック内の例外は try/catch でキャッチできるだろうか
  //
  // 解答:
  // catchできない
  // 
  // 出力は以下
  // C
  // A
  // file:///Users/minamitaga/js-exsercises/ch13/index.js:34
  //   throw new Error("X");
  //         ^
  // Error: X
  //     at errX (file:///Users/minamitaga/js-exsercises/ch13/index.js:34:9)
  try {
    wait(0).then(logA).then(errX);
  } catch (e) {
    logB();
  } finally {
    logC();
  }
}

function f4() {
  // NOTE: f5 との比較用
  //
  // 解答:
  // 実行から2秒後にAが出力、40をreturn。それを待ってから1秒後にBを出力、100をリターン。それを待って出力
  // 
  // 出力は以下
  // A
  // B
  // 100
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then((value) =>
      wait(1000).then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

// f4()

function f5() {
  // NOTE: 2つ目の then の引数が関数でなく Promise になっている (典型的なミス)
  //
  // 解答:
  // 実行から1秒後にBを出力、その1秒後にAが出力、40をリターンし、それを出力
  // f4との違いは、thenでvalueを待ってないので、実行後すぐにwait1のカウントがはじまること
  //
  // 出力は以下
  // B
  // A
  // 40
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then(
      wait1().then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

// f5()

function f6() {
  // NOTE: 1つの Promise に対し then を2回呼び出すとどうなるか
  //
  // 解答:
  // 1秒後にA、その1秒後にB、さらにその1秒後にCが出力される
  // 1つの Promise に対し then を2回呼び出すと同時に実行される
  //
  // 出力は以下
  // A
  // B
  // C
  const p = wait1().then(logA);
  p.then(() => wait1()).then(logB);
  p.then(() => wait2()).then(logC);
}

// f6()

function f7() {
  // NOTE: 2つ目の wait の引数が実行される差には p は解決済み
  // (= 解決済みの Promise の then を呼び出すとどうなるか)
  //
  // 解答：
  // 実行後1秒でAが出力、その2秒後にB,Cがほぼ同時に出力される。
  // 解決済みの Promise の then を呼び出すと即時実行される。
  // 
  // 出力は以下
  // A
  // B
  // C
  const p = wait1().then(logA);
  wait2()
    .then(() => {
      return p.then(logB);
    })
    .then(logC);
}

// f7()

function f8() {
  // NOTE: f9, f10 との比較用
  //
  // 解答：
  // 1秒後にXは出力され、ほぼ同時にAが出力された
  // 1つ目のthenのPromiseが解決する前にErrorがthろwされたので2つ目のthenは実行されてない
  // 
  // 出力は以下
  // X
  // A
  wait1()
    .then(errX)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

// f8()

function f9() {
  // NOTE: f12 との比較用
  //
  // 解答：
  // 1秒後にYが出力され、ほぼ同時にAが出力された
  //
  // 出力は以下
  // Y
  // A
  wait1()
    .then(() => 42)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

// f9()

function f10() {
  // NOTE: then(r, c) と then(r).catch(c) は等しいか？
  //
  // 解答：
  // then(r, c) と then(r).catch(c) は等しくない
  // then(r, c) → Promise内で生じたエラーのみcで処理される。rで生じたエラーは処理されない
  // then(r).catch(c) → Promise内、rで生じたエラーともにcで処理される
  // 
  // 出力は以下
  // A
  // file:///Users/minamitaga/js-exsercises/ch13/index.js:37
  // throw new Error("Y");
  //       ^

  // Error: Y
  // at errY(file:///Users/minamitaga/js-exsercises/ch13/index.js:37:9)

  // Node.js v18.19.0
  wait1()
    .then(() => 42)
    .then(errY, (e) => log(e.message))
    .finally(logA);
}

// f10()

function f11() {
  // f12 との比較用: new Promise 内の throw は .catch でキャッチできるか？
  //
  // 解答：
  // new Promise 内の throw は .catch でキャッチできる
  // 
  // 出力は以下
  // X
  new Promise((resolve, reject) => {
    errX();
  }).catch((e) => log(e.message));
}

// f11()

function f12() {
  // new Promise 内だがコールバック関数で throw した場合は？
  //
  // 解答：
  // new Promise 内だがコールバック関数で throw した場合はキャッチできない
  // 
  // 出力は以下
  //   file:///Users/minamitaga/js-exsercises/ch13/index.js:34
  //   throw new Error("X");
  //   ^
  //
  // Error: X
  //     at errX (file:///Users/minamitaga/js-exsercises/ch13/index.js:34:9)
  //     at Timeout._onTimeout (file:///Users/minamitaga/js-exsercises/ch13/ex02/index.js:255:22)
  //     at listOnTimeout (node:internal/timers:569:17)
  //     at process.processTimers (node:internal/timers:512:7)
  //
  // Node.js v18.19.0
  new Promise((resolve, reject) => {
    setTimeout(() => errX(), 0);
  }).catch((e) => log(e.message));
}

// f12()