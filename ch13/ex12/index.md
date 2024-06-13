
## マイクロタスク
最初、マイクロタスクとタスクの違いは小さいように見えます。どちらもキューに入れられ、適切なタイミングで実行される JavaScript のコードで構成されています。しかし、イベントループは反復が始まったときにキューに存在したタスクだけを次々と実行するのに対し、マイクロタスクのキューはとても異なる方法で処理されます。

主な違いは 2 つあります。

まず、タスクが終了するたびに、イベントループは、タスクが他の JavaScript コードに制御を返しているかどうかをチェックします。もしそうでなければ、マイクロタスクキューにあるすべてのマイクロタスクを実行します。マイクロタスクキューは、イベントや他のコールバックを処理した後を含め、イベントループの反復ごとに複数回処理されます。

次に、マイクロタスクが queueMicrotask() を呼び出してキューにさらにマイクロタスクを追加すると、それらの新しく追加されたマイクロタスクは次のタスクが実行される前に実行されます。これは、イベントループが、たとえ追加され続けても、キューに何も残らなくなるまでマイクロタスクを呼び続けるからです。

- [【JavaScript】非同期処理⑥　マクロタスクとマイクロタスク](https://qiita.com/nao0725/items/0cf9f47dd8a39b1e5d1f)

マイクロタスク

- マイクロタスクはタスクキューとは別に存在する非同期処理待ちの行列（ジョブキュー）
- マイクロタスクとマクロタスクが同じイベントループで処理が行われた場合マイクロタスクが優先される
- イベントループで処理が回ってきたら、全ての格納されているジョブを実行する