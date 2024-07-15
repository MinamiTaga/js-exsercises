## React

#### XSS対策

- Reactの標準エスケープ（HTML要素の埋め込みができない）

#### 残存するXSSの危険性

- dangerouslySetInnerHTMLの利用(React標準のエスケープを無効化)
- javascriptスキームの悪用(href属性は、先頭がjavascript:から始まる場合はそれ以降の文字列をjavascriptとして実行。window.locationオブジェクトへの操作も同様。)

https://qiita.com/kazzzzzz/items/897f8ed89ca36a0734de
