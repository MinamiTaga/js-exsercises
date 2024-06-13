setTimeout(() => console.log("Hello, world!"), 1000);

async function longRunningButAsyncFunction() {
  while (true) {
    // NOTE: ループの中で凄く時間のかかる処理 (大きい行列の処理とか...) を実行していると想像して下さい。
    // (適当な値で await するのが目的であり null に理由はない)
    await null;
  }
}

longRunningButAsyncFunction();

// 予想：1秒経っても'Hello World'は出力されず、処理が終了しない。
// 以下、問題13.1より引用
// `Heelo World!`を出力するタスクがキューに入れられるのは、コード実行から1秒後なので、longRunningFunction()の無限ループタスクが先にキューに入り、終了しないため、次のタスクを実行できない。


// 結果
// 予想通りの挙動