setTimeout(() => console.log("Hello, world!"), 1000);

function longRunningFunction() {
  while (true) {
    // NOTE: while (true) {} は極端な例であり、現実で見ることは少ないかもしれません。
    // しかし、時間のかかる同期処理を実行して同様の問題が発生することは実際にあります。
  }
}

longRunningFunction();

// 予想
// 実行後1秒後にHello World!が出力後、処理が終了しない

// 結果
// Hello World!は出力されない。また処理は終了しない。
// `Heelo World!`を出力するタスクがキューに入れられるのは、コード実行から1秒後なので、longRunningFunction()の無限ループタスクが先にキューに入り、終了しないため、次のタスクを実行できない。