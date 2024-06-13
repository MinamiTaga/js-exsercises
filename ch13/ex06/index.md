[jQueryのDeferredの基本的な使い方メモ](https://qiita.com/opengl-8080/items/6eba7922be168edfc439)

[いまさら理解する jQuery Deferred](https://qiita.com/atti/items/17fd8b11305a5375a1de)

Deferred Object は jQuery において主に非同期処理を扱うための仕組み。
非同期処理といっても JavaScript はシングルスレッドで実行されるため、コード断片が同時に実行されることはない。あるタスクが完了したときに呼び出されるコールバックを登録できるだけ。

jQueryPromise は、初期状態の pending （待機）と、決定された resolved （解決）と rejected （拒否）のいずれかの状態を持ち、状態がいずれかに決定されたときに予め登録されたコールバックを呼び出す仕組み。

jQueryPromise の then と Promise の then の挙動は同じではありません。



- jQueryDeferred は resolve/reject 関数をもち、状態を決定できる
- jQueryPromise は初期状態の pending 、および決定された resolved と rejected の状態をもつが、自身では状態を決定できない
- done/fail/always は resolved/rejected のうち対応する状態に割り当てられたキューにコールバックを追加し、自分自身を返す関数
- then は resolved/rejected のそれぞれの状態に割り当てられたキューにコールバックを追加し、そのコールバックの返値で決定される新しい jQueryPromise を返す関数
- jQuery 3.x では、then に渡されたコールバックは setTimeout を介してタスクキューに追加されるため、コールスタックが空になった後に遅延実行される
- ES6 の Promise における then は、渡されたコールバックをマイクロタスクキューに追加するため、jQueryPromise とは挙動が異なる