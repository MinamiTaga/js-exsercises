npm install すると作成される package-lock.json はどのような役割を持つのか。
また、リポジトリにコミットすべきか、について説明しなさい。

- npm install で実際にインストールしたパッケージ情報が記載されている。  
  （package.jsonだけではバージョンXX以上のように不確定な情報もある）
- package-lock.json を使用してパッケージをインストールする際には`npm ci`コマンドを実行する
- `npm ci`コマンドを実行する主なユースケースとしては CI 実行時や git clone 後の動作確認などで使用する
- 上記の用途があるので package-lock.json は Git で管理したほうがいいファイルである

`npm install`と`npm ci`の違い

- `npm ci`は`npm install`と同じように全ての依存パッケージをインストールする
- `npm install`コマンド実行によって package-lock.json を更新することがある
- `npm ci`コマンド実行によって package-lock.json は更新されない
- `npm ci`コマンド実行すると node_modules をすべて削除してからパッケージをインストールする
