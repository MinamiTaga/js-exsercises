https://developer.mozilla.org/ja/docs/Web/Security/Subresource_Integrity

[“script”要素~“integrity”属性](https://web.havincoffee.com/html/tag/script/integrity.html#:~:text=%E2%80%9Cintegrity%E2%80%9D%E5%B1%9E%E6%80%A7%E3%81%AF%E5%A4%96%E9%83%A8%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88,%E3%81%AE%E5%9B%9E%E9%81%BF%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A1%E3%81%BE%E3%81%99%E3%80%82)

CDNなどから取得した外部スクリプトに第三者によって意図しない改竄が加えられていないかを検証し、クロスサイトスクリプティングなどのインジェクション攻撃の回避に役立ちます。
ブラウザは外部スクリプトを読み込む時、読み込んだハッシュ値と“integrity”属性の値に指定されたハッシュ値を比較し、一致した場合にのみ読み込まれた外部スクリプトを実行します。
“integrity”属性は“src”属性が指定されていない場合は指定できません。
