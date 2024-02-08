function f() {
  try {
      return true;
  } finally {
      return false;
  }
}

console.log(f());

// 予想：trueが出力される、多分一旦true返してしまってるからfalseは間に合わない
// 結果：false