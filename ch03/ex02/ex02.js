console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE+1)

if(Number.MAX_VALUE+1 === Number.MAX_VALUE+2) {
  console.log('Number.MAX_VALUE+1 === Number.MAX_VALUE+2')
}

// Number.MAX_VALUEはJavaScriptで扱うことのできる整数の最大値。
// そのため、どれだけ数字を足してもそれ以上の値になることはない。
// つまり、Number.MAX_VALUE === Number.MAX_VALUE+1 === Number.MAX_VALUE+2