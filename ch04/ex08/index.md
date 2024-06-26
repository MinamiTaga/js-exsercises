## 問題 4.8 🖋️

古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。

**出題範囲**: 4.13

参考
https://techplay.jp/column/559

> Undefinedというのは単なる変数でしかありません。変数であるということは、Undefined以外の他の値を持たせることが可能なのでいつでもUndefinedであるという保証はないのです。
> ですから、絶対にUndefinedがかえってきてほしいというときにはvoid演算子を使うことが定着するようになりました。

> aタグのhrefはなにか記載する必要がある
> それはaタグのブラウザ上での挙動が関係します。
> HTMLのaタグで遷移するのではなく何らかのアクションをさせたい場合、aタグにonclick属性を持たせて、JavaScriptのコードを書くことができます。しかしhref属性にリンク先が書いてあるとアクションが作動する前に遷移してしまい、onclick属性に書いたコードが正しく動きません。
> さらにブラウザはaタグのhref属性になにも記載されていなければ、リンクだとみなさないという挙動を取ることがあります。リンクだとみなさないということは、aタグの部分にカーソルを乗せたとしてもカーソルがポインターに変わらず、通常のテキストと同じように扱われてしまうのです。
> それではせっかくonclick属性でアクションを指定していても、クリッカブルなのかどうかが分からず押してもらいにくいということが起きてしまい、UI的に大きなマイナスとなってしまうのです。
> aタグをクリックしたときにonclickに記述したJavaScriptのコードを動作させるためには、hrefを無効にしなければならないこと、hrefを空白にするだけだとリンクとして認識されないこと、がわかりました。
> これらを解決するために登場するのが、voidです。
> href属性に「javascript:void(0);」と書くことで、href属性は常に安定してUndefinedがあることになります。ブラウザはなにも記載がない場合はリンクとして判断しませんが、Undefinedならリンクであると判断してくれて、カーソルがポインターになります。
> Undefinedですから、リンクと判断しながら遷移の挙動をすることはないという特殊な動作になるのです。
> 結果として「void(0)」によって、見栄えとしての「押すところ」であることが一目瞭然になり、正しくonclick属性のアクションを作動させられるのです。

今ではこのような書き方をしない理由

- voidが出るとかっこ悪い
  > ブラウザにはリンク先のURLを表示してくれる機能がついています。ブラウザは「javascript:void(0);」をリンクと認識するわけですから、リンク先情報としてそのまま「javascript:void(0);」と表示されてしまいます。
  > インターネットを使うことにおいてセキュリティーの意識が高くなっている今、多くのユーザーがリンク先として示される情報を見るようになっています。
  > そんな中で、onclick属性にアクションを仕掛けたaタグにカーソルを重ねると、当然「javascript:void(0);」がリンク先として表示されてしまうのです。どれだけかっこいい最先端のデザインのサイトであったり、ボタンにすごいアクションが仕掛けてあったとしても、ユーザーにとって意味のわからない記述が提示されてしまうことになり、良い印象とはならず興味が覚めてしまうことにもなりかねません。

chatGPT

> 現代の JavaScript では、undefined が再定義されることは非常にまれであり、静的解析ツールやコードレビューによってそのような問題が検出されやすいため、if (foo === undefined) のような直接的な比較が一般的に使用されます。
> また、undefined は ECMAScript の標準の一部であり、void 0 はそのような理由から意味が分かりにくいとされ、可読性が低いと見なされることがあります。そのため、現代の JavaScript コードでは、明確で直感的な方法で undefined を比較することが推奨されています。
