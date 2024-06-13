import { wait, wait1, wait2, wait3, log, logA, logB, logC, errX, errY } from './../index.js'

async function i1() {
  // NOTE: any で1つ Promise が解決された時に他の Promise はどうなるだろうか
  // 予想
  // 解決されるまで実行され続ける(42が出力されて２秒後に0が出力される)
  // 
  // 結果
  // 42が出力され、２秒後に100が実行された。
  // 解決はされてしまっているのでPromiseの戻り値は変わらない
  // 
  // 出力
  // 42
  // 100

  let v = 0;

  v = await Promise.any([
    wait1().then(() => 42),
    wait2()
      .then(() => (v = 100))
      .then(() => 0),
  ]);

  log(v);
  await wait2();
  log(v);
}


async function i2() {
  // 予想
  // 実行後１秒後にC、その１秒後にB、その１秒後にA、その直後に[A,B,C]が出力される
  // 
  // 結果
  // 実行後１秒後にC、その１秒後にB、その１秒後にA、その直後に[C,B,A]が出力される
  // Promise.all()は解決された順に格納される
  //
  // 出力
  // C
  // B
  // A
  // [ 'A', 'B', 'C' ]


  const v = await Promise.all([
    wait3().then(() => {
      logA();
      return "A";
    }),
    wait2().then(() => {
      logB();
      return "B";
    }),
    wait1().then(() => {
      logC();
      return "C";
    }),
  ]);
  log(v);
}


async function i3() {
  // NOTE: all で引数の1つが失敗すると他の Promise はどうなるだろうか
  // 予想
  // 1秒後にYと直後に42が出力され、その1秒後にB、その1秒後にX、直後に0が出力、さらに3秒後に0が出力される
  //
  // 結果
  // 1秒後にYと直後に42が出力され、その1秒後にB、その2秒後に0が出力され終了した
  // all で引数の1つが失敗すると、catch内の処理が終了するまでの間他のPromiseは実行される。2回目のエラーはcatchされない
  // 
  // 出力
  // Y
  // 42
  // B
  // 0


  let v = 42;
  try {
    await Promise.all([
      wait3().then(() => {
        v = 0;
        errX();
      }),
      wait2().then(() => {
        logB();
        return "B";
      }),
      wait1().then(() => {
        errY();
      }),
    ]);
  } catch (e) {
    log(e.message);
    log(v);
    await wait3();
    log(v);
  }
}


async function i4() {
  // NOTE: i5, i6 との比較用 (直列に処理を実行したいものとする)
  // 予想
  // 5秒後に0,その4秒後に1,その3秒後に2,その2秒後に4、直後にCOMPLETEDが出力される
  // 
  // 結果
  // 予想通り
  //
  // 出力
  // 0
  // 1
  // 2
  // 3
  // 4
  // COMPLETED

  let p = Promise.resolve(null);
  for (let i = 0; i < 5; ++i) {
    p = p.then(() => wait((5 - i) * 1000).then(() => log(i)));
  }
  return p.then(() => log("COMPLETED"));
}


async function i5() {
  // NOTE: このコードは期待通りの挙動をすると考えられるだろうか？(典型的なミス)
  // 予想
  // COMPLETED出力後、1秒ごとに4,3,2,1,0と出力
  //
  // 結果
  // 予想通り
  // 
  // 出力
  // COMPLETED
  // 4
  // 3
  // 2
  // 1
  // 0

  let p = Promise.resolve(null);
  for (let i = 0; i < 5; ++i) {
    p = p.then(wait((5 - i) * 1000).then(() => log(i)));
  }
  return p.then(() => log("COMPLETED"));
}


async function i6() {
  // 予想
  // 5秒後に0,その4秒後に1,その3秒後に2,その2秒後に4、直後にCOMPLETEDが出力される
  // 
  // 結果
  // 1秒ごとに4,3,2,1,0と出力され、その直後にCOMPLETED
  // 
  // 出力
  // 4
  // 3
  // 2
  // 1
  // 0
  // COMPLETED

  return Promise.all(
    [0, 1, 2, 3, 4].map((i) => wait((5 - i) * 1000).then(() => log(i)))
  ).then(() => log("COMPLETED"));
}


async function i7() {
  // NOTE: i8 との比較用
  // 予想
  // 9秒後に10が出力される
  //
  // 結果
  // 予想通り
  //
  // 出力
  // 10

  let v = 0;

  // 1秒待った後に2秒間隔で value の値を更新
  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      v = next;
      await wait2();
    }
  };

  // 2秒間隔で value の値を更新
  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      v = next;
      await wait2();
    }
  };

  await Promise.all([p1(), p2()]);
  log(v);
}

async function i8() {
  // NOTE: 複数の非同期処理が1つの変数に対し書き込みを行う場合、読み込みと書き込みの間に await が入るとどうなるだろうか
  // 予想
  // 9秒後に五が出力される
  //
  // 結果
  // 予想通り
  // 
  // 出力
  // 5 

  let v = 0;

  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      // NOTE: value の読み込み (value + 1) と書き込み (value = ...) の間に await が...
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  await Promise.all([p1(), p2()]);
  log(v);
}

