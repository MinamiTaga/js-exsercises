2. このサーバでは Cookie を使ってクライアントのセッションを識別し、タスク一覧をセッションごとに分離して管理する簡易的な認証/認可を行っている。サーバが設定している Cookie の値は `sid=<セッションに一意に割り当てた ID>; SameSite=Lax; Path=/; HttpOnly;` である。ToDo アプリでいくつかのタスクを作成した後、以下に挙げる操作を実施したとき、それぞれどのような結果になるか記載し、その理由を説明しなさい。

   - index.js で`document.cookie` プロパティを `console.log`で表示する

   →　undefined
   →HttpOnlyなので、スクリプトではアクセスできない

   - ブラウザの開発者コンソールで http://localhost:3000/ の Cookie を表示する

   →表示される
   →同一オリジンから参照しているため

   - ToDo アプリのタブをリロードする

   →画面表示は変化しない
   →同一セッション内であるため

   - 同一ブラウザの異なるタブやウィンドウで http://localhost:3000/ を開いて ToDo リストの状態を確認する

   →同じタスクが表示される
   →同一セッション内であるため

   - シークレットウィンドウや異なるブラウザで http://localhost:3000/ を開いて ToDo リストの状態を確認する

   →タスクが表示されない
   →セッションが違うため

   - http://127.0.0.1:3000/ を開いて ToDo リストの状態を確認する

   →タスクが表示されない
   →ドメインが違うため
