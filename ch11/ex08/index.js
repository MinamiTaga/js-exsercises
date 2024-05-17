// とても時間がかかる


const str1 = 'aaaaaaaaaaaaaaaaaaaaa!';
const str2 = 'aaaaaaaaaaaaaaaaaaaaaaaaaa!';
const str3 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!';
const str4 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!';
const str5 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!';

const pattern = /^(a|aa)+$/; // 先頭から末尾までが`a`または`aa`の1回以上の繰り返し
// ^ : 先頭
// (a|aa) : aまたはaa
// + : aまたはaa
// $ : 末尾


console.time()
console.log(pattern.test(str1, console.timeLog())) // 7.573ms
console.log(pattern.test(str2, console.timeLog())) // 9.883ms
console.log(pattern.test(str3, console.timeLog())) // 146.016ms
console.log(pattern.test(str4, console.timeLog())) // 6.341s
console.log(pattern.test(str5, console.timeLog())) // 終わらない

// 文字列の長さに比例するわけではない
// 正規表現エンジンが各パターンを試行する際に、バックトラッキングや複雑な探索を行うためです (?)
// →またはが入っているから？よくわからない
// ReDosと呼ばれる