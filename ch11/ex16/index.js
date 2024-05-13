export async function retryWithExponentialBackof(func, maxRetry, callback) {
  let result = func();

  console.log(result)
  if (!result) {
    for (let i = 0; i < maxRetry; i++) {
      console.log(result)

      setTimeout(() => {
        result = func();
      }, 2 ** i * 1000);
      // retryの結果trueが返れば終了
      if (result) {
        break;
      };
    }
  };

  // func が true を返す、またはmaxRetry回のリトライが失敗し終了する際、その結果(true/false)を引数として関数 callback が呼び出される
  callback(result);

  return;
};