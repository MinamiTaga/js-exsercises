import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// TODO: ここに処理を書く

// シグナルを 2 種類以上トラップし、そのシグナルと同じシグナルを子プロセスに通知し、子プロセスがそのシグナルによって終了したことを確認し、自身も終了する
process.on("SIGINT", () => {
  child.kill("SIGINT");
  child.on("exit", (signal) => {
    if (signal === "SIGINT") {
      process.exit(0);
    }
  });
});

process.on("SIGTERM", () => {
  child.kill("SIGTERM");
  child.on("exit", (signal) => {
    if (signal === "SIGTERM") {
      process.exit(0);
    }
  });
});

// 子プロセスが異常終了した場合、再起動する
// これを↑より上に書くと↑に到達できないと言われたので下にした
for (;;) {
  const response = await startChild();
  if (!response[0]) {
    console.log("restart");
  }
}
