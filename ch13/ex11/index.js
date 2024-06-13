// export async function retryWithExponentialBackoff(func, maxRetry, callback) {
//   let result = func();

//   console.log(result)
//   if (!result) {
//     for (let i = 0; i < maxRetry; i++) {
//       console.log(result)

//       setTimeout(() => {
//         result = func();
//       }, 2 ** i * 1000);
//       // retryの結果trueが返れば終了
//       if (result) {
//         break;
//       };
//     }
//   };

//   // func が true を返す、またはmaxRetry回のリトライが失敗し終了する際、その結果(true/false)を引数として関数 callback が呼び出される
//   callback(result);

//   return;
// };

export async function retryWithExponentialBackoff(func, maxRetry, callback) {
  let attempt = 0;
  let result;

  while (attempt < maxRetry) {
    try {
      result = await func();
      // func()が成功したらbreak
      if (result) {
        break;
      }
    } catch (e) {
      console.log(e)
    }

    attempt++;
    const time = 2 * attempt * 1000;
    await new Promise(resolve => setTimeout(resolve, time));
  }

  // func()が成功、またはmaxRetry回のリトライが失敗し終了する時、その結果を引数としてcallbackが呼び出される
  callback(result);

  return result;
}

// (async () => {
// const res = await retryWithExponentialBackoff(
//   () => fetch("https://example.com"),
//   5,
//   (r) => {console.log('成功', r.status)}
// );
// console.log(res.status)
// })();
