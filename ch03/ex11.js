const str = 'abc';

const symbol1 = Symbol(str);
const symbol2 = Symbol(str);

// const object = {symbol1, symbol2};

const object = {};
object[symbol1] = 1;
object[symbol2] = 2;


console.log(object[symbol1]); // 1
console.log(object[symbol2]); // 2

const symbol3 = Symbol.for(str);
const symbol4 = Symbol.for(str);

const object2 = {};
object2[symbol3] = 1;
object2[symbol4] = 2;

console.log(object2[symbol3]); // 2
console.log(object2[symbol4]); // 2