
// 引数は複数個あるので()は必須、関数本体も処理が複数あるので{}必須
export const func1 = (n, c) => {
  let arr = [];
  for (let count = 0; count < n; count++) {
    console.log(c);
    arr.push(c);
  }
  return arr;
}

// 引数は1つなので()不要、関数本体もreturnのみなので{}不要
export const func2 = x => x**2;

// 引数なしなので()必須、関数本体はオブジェクトのreturnのみなので()で記載
export const func3 = () => ({now: new Date()});


