// const threads = require("worker_threads");
import * as threads from "worker_threads";

if (threads.isMainThread) {
  // let sharedBuffer = new SharedArrayBuffer(4);
  // let sharedArray = new Int32Array(sharedBuffer);
  let num = 0;
  let worker = new threads.Worker(__filename);
  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      num++;
    }
    worker.on("message", (message) => {
      if (message === "num をインクリメントせよ") {
        num++;
      } else {
        console.log(message);
      }
    });
  });
} else {
  let sharedArray = threads.workerData;
  for (let i = 0; i < 10_000_000; i++) {
    threads.parentPort.postMessage("num をインクリメントせよ");
  }
  threads.parentPort.postMessage("done");
}

// このようないわゆるメッセージパッシングによって排他制御処理相当を行う並行処理モデルを何と呼ぶか書きなさい。
// アクターモデル
// https://hackmd.io/@LINAp8NKSB60NVYc3zW5EQ/HkX39j_e2#%E3%82%A2%E3%82%AF%E3%82%BF%E3%83%BC%E3%83%A2%E3%83%87%E3%83%AB
