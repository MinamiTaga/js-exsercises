\*1 mFib.jsは第一引数で項数、第二引数でスレッド数を指定。コンソールには実行時間とフィボナッチ数が出力される。講師PCでは `node mFib.js 45 4` の実行に15秒程かかる。

\*2 OSがwindowsの場合"リソースモニター"（"`Winキー+r`"の後"`resmon`"で起動）で実行中プログラムのスレッド数を確認できる。

### 用語「マルチスレッド」について調べなさい。

マルチスレッドとは、一つのコンピュータープログラムを実行する際に、アプリケーションのプロセス（タスク）を複数のスレッドに分けて並行処理する流れのことです。マルチスレッドの対義語はシングルスレッドで、ソースコードの上から順に一つの処理を行ないます。
スレッドとはCPUから見たプログラムの実行単位であり、プロセスの中に組み込まれているものです。マルチスレッドとは、複数のスレッドが一つのプロセス内で実行されることを表します。

マルチスレッドを用いると、プロセス内で複数の処理を同時に行なうため、処理速度と精度が飛躍的に向上します。
ただし、マルチスレッドはスレッドを高速で切り替えながら処理するため、切り替えのタイミングによってはバグを起こす可能性もあります。

CPUコアが複数あるコンピューターはマルチスレッド処理が可能です。
ただし、単一のCPUであっても、利用時間を分割し、順番を割り当てることでマルチスレッドが可能になります。

## 次にフィボナッチ数を計算するmFib.jsをスレッド数を変更しながら実行し(*1)、コンソール出力とOS機能(*2)で結果とスレッド数を確認しなさい。

スレッド15

```
$ node ch16/ex01/mFib.js 45 4
Worker 1 execution time: 1.357s
Worker 3 execution time: 2.158s
Worker 0 execution time: 3.426s
Worker 2 execution time: 5.418s
Total execution time: 5.424s
Fibonacci number: 1836311902
```

スレッド12

```
$ node ch16/ex01/mFib.js 45 1
Worker 0 execution time: 11.922s
Total execution time: 11.929s
Fibonacci number: 1836311902
```

スレッド21

```
$ node ch16/ex01/mFib.js 45 10
Worker 8 execution time: 166.405ms
Worker 7 execution time: 255.973ms
Worker 2 execution time: 347.829ms
Worker 6 execution time: 527.428ms
Worker 1 execution time: 744.529ms
Worker 4 execution time: 1.044s
Worker 9 execution time: 1.508s
Worker 5 execution time: 2.241s
Worker 0 execution time: 3.355s
Worker 3 execution time: 5.064s
Total execution time: 5.070s
Fibonacci number: 1836311902
```

## 最後にあなたのPCのCPUスペックを調査し、適切なスレッド数についての考察を記しなさい。

コアの総数: 8（パフォーマンス: 4、効率性: 4）
適切なスレッド数　8
