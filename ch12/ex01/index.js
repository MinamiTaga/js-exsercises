// 明示的にイテレータインタフェース のメソッドを呼んだり、間接的に呼んだりする
// ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する
// return() や throw() がどのようなときに呼ばれるのか確認する
// ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する

function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

const iter = counterIter(3);
console.log(iter.next()) // counterIter counterIter: next { value: 1, done: false }
console.log(iter.return(2)) // counterIter: return: 2 { value: 2, done: true }
console.log(iter.next()) // counterIter: next { value: 2, done: false }
console.log(iter.next()) // counterIter: next { value: 3, done: false }
console.log(iter.next()) // counterIter: next { value: undefined, done: true }
console.log(iter.return(1)) // counterIter: return: 1 { value: 1, done: true }
console.log(iter.return(10)) // counterIter: return: 10 { value: 10, done: true }


function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

const gen = counterGen(3);
console.log(`next()呼ぶ前`)
console.log(gen.next().value) // counterGen counterGen: next 1
console.log(`next()呼んだ1`)
console.log(gen.next().value) // counterGen: next 2
console.log(`next()呼んだ2`)
console.log(gen.next().value) // counterGen: next 3
console.log(`next()呼んだ3`)
console.log(gen.next().value) // counterGen: finally undefined
console.log(`next()呼んだ4`)
console.log(gen.next().value) // undefined
console.log(`next()呼んだ5`)

// return()は、反復が終了するとき（nextでdoneにtrueが入った時に）にあれば呼び出される。