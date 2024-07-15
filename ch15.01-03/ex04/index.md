https://developer.mozilla.org/ja/docs/Glossary/Global_object

## グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。

### ブラウザ内

`window`

### node内

`global`

### ブラウザnode問わず

`grobalThis`

## ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。

- window
- document
- location
- history
- navigator
- alert
- localStorage
- sessionStorage

## グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined

https://zenn.dev/lollipop_onl/articles/eoz-using-undef-on-js

undifinedが代入可能な変数であったため、別の値が代入することがあり得た。（ES3）
今はあり得ない。（ES5）
