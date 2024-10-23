import express from "express";
import path from "path";
import fs from "fs";
const app = express();

function serve(rootDirectory) {
  // リクエストが「/test/mirror」の場合、リクエストをそのまま送り返す。
  // リクエストのヘッダやボディを見たい場合に便利。
  app.get("/test/mirror", (request, response) => {
    // レスポンスヘッダを設定する。
    response.setHeader("Content-Type", "text/plain; charset=UTF-8");
    // レスポンスのステータスコードを指定する。
    response.writeHead(200); // 200 OK
    // レスポンスボディの最初はリクエスト。
    response.write(
      `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
    );
    // レスポンスヘッダを設定する。
    response.setHeader("Content-Type", "text/plain; charset=UTF-8");
    // レスポンスのステータスコードを指定する。
    response.writeHead(200); // 200 OK
    // レスポンスボディの最初はリクエスト。
    response.write(
      `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`
    );
  });
  // それ以外の場合は、ローカルディレクトリからファイルを提供する。
  app.get("/:filename", function (request, response, next) {
    // エンドポイントをローカルファイルシステムのファイルにマッピングする。
    let filename = request.params.filename;
    // パス中の「../」を禁止する。ルートディレクトリの外側のファイルを提供する
    // ことになり、セキュリティホールになるから。
    filename = filename.replace(/\.\.\//g, "");
    // 次に、相対パスを絶対パスに変換する。
    filename = path.resolve(rootDirectory, filename);
    // 拡張子に基づいて、ファイルのコンテンツタイプを推測する。
    let type;
    switch (path.extname(filename)) {
      case ".html":
      case ".htm":
        type = "text/html";
        break;
      case ".js":
        type = "text/javascript";
        break;
      case ".css":
        type = "text/css";
        break;
      case ".png":
        type = "image/png";
        break;
      case ".txt":
        type = "text/plain";
        break;
      default:
        type = "application/octet-stream";
        break;
    }
    const stream = fs.createReadStream(filename);
    stream.once("readable", () => {
      // ストリームが読み込めるようになったら、Content-Typeヘッダと
      // 200 OKステータスを設定する。そして、ファイル読み出し
      // ストリームをレスポンスにパイプする。ストリームが終了すると、
      // パイプは自動的にresponse.end()を呼び出す。
      response.setHeader("Content-Type", type);
      response.writeHead(200);
      stream.pipe(response);
    });

    stream.on("error", (err) => {
      // ストリームを開こうとしてエラーが発生した場合、
      // そのファイルはおそらく存在しないか、読めないと思われる。
      // エラーメッセージをプレーンテキストで記述して、
      // 404 Not Foundレスポンスを送信する。
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");
      response.writeHead(404);
      response.end(err.message);
    });
  });
}
export default app;

serve(process.argv[2] || "tmp");
