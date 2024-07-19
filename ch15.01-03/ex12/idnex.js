// Backlogの指定のタスクを開く（URLはダミーに変更済み）
javascript: (function () {
  t = prompt("課題番号", "");
  if (t !== "" && t !== null) {
    location.href = "https://abcd.backlog.com/view/TASK-" + t;
  }
})();

// https://qiita.com/shotets/items/817e2c525615334a38fb

// ページを日本語に翻訳
javascript: (function () {
  open(
    "http://translate.google.com/translate?hl=ja&u=" +
      escape(document.location.href),
    "_blank"
  );
})();
