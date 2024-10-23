import fs from "fs";

// NOTE: file.txt の内容をアップロード
fetch("http://localhost:8000/file.txt", {
  method: "PUT",
  body: fs.createReadStream("ch16/ex10/file.txt"),
  //   body: fs.readFileSync("./file.txt"),
  duplex: "half",
});

// メモリ量未確認
