import { wait } from './../index.js'

function g1() {
  // TODO: then のネストを無くしなさい
  return setTimeout(() => {
    console.log("A");
    return setTimeout(() => {
      console.log("B");
      return setTimeout(() => {
        console.log("C");
      }, 3000)
    }, 2000)
  }, 1000)
}

async function g2() {
  // TODO: new Promise を使わないように書き換えなさい
  try {
    await wait(1000)
    console.log("A")
    await wait(2000)
    console.log("B")
    await wait(3000)
    console.log("C")
  } catch (e) {
    console.log(e)
  }
}

function g3() {
  // 以下2つの関数が存在するとします (中身は適当)
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  // TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
  return fetchUser()
    .then((user) => {
      fetchUserFriends(user)
        .then((friends) => {
          console.log(`${user.name} has ${friends.length} friends!`);
        })
    });
}

function g4() {
  function someFunction() {
    return 42;
  }

  // NOTE: この関数 g4 は Promise を返す必要があるものとする
  // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
  // TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
  return Promise.resolve(someFunction());
}

console.log(g4())
