TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

https://t-yng.jp/post/tsc-and-babel
https://qiita.com/nacam403/items/edf3e2c8ff364aff910f

- @babel/preset-typescriptはJavascriptに変換（トランスパイル）するのみだがtscでは型チェックも行える
- @babel/preset-typescriptはconst, enumsやデコレーターなど一部のTypeScriptの機能を正常にトランスパイルできない
- 元からtscを使っていた人にとっては@babel/preset-typescriptに乗り換えるメリットはあまりないが、すでにBabelに慣れている人にとってはTypeScriptを書き始める敷居が低くなったと言える
