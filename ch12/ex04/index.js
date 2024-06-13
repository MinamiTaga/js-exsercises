export function* getPrimeNumbers() {
  // 素数を入れていく配列
  const numbers = [];
  // 素数の候補２スタート 
  let primeNum = 2; 

  while (true) {
    // 素数候補の値が、numbersの中の値で割り切れなければ素数
    if (numbers.every(p => primeNum % p !== 0)) {
      yield primeNum;
      numbers.push(primeNum);
    }
    primeNum++;
  }
}

// const pn = getPrimeNumbers();
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());
// console.log(pn.next());