## 問題 4.5 🖋️

以下のプログラムは 1 から 100 までの FizzBuzz を出力する。
Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。

```javascript
for (i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

まず、for文で1〜100の値を渡していく。

`(i % 3 ? "" : "Fizz")`

ここの部分では、i/3の余りが0以外であれば空文字"",0であれば”Fizz”の値が入る。

`(i % 5 ? "" : "Buzz")`

同様に、i/5の余りが0以外であれば空文字"",0であれば”Buzz”の値が入る。
つまり、3の倍数は’Fizz',5の倍数は’Buzz’,両方に当てはまる15の倍数は’FizzBuzz’を持っている。
どちらにも当てはまらない場合は空文字’’になるので||の左辺がfalseと評価され、iとなる。
