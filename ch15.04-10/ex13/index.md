https://gihyo.jp/dev/clip/01/orangenews/vol62/0005

## hashbangの仕組み

hash-bangを含むURLはAjaxを利用するために考えられたしくみです。#以降は単なるフラグメントとして処理されるため、サーバは#より前のURLを解釈しコンテンツを出力します。そしてブラウザにてJavaScriptが#以降を解釈し、以降のパスに相当するコンテンツをAjaxにて取得しコンテンツを書き換えます。
Googleが「#!」を「?_escaped_fragment_=」に変換してクロール可能にする仕様を公開したため、FacebookやLifehacker.comをはじめ各所で使われるようになりました。
