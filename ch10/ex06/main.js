import "./index.js";
console.log("1回目importした");

import "./index.js";
console.log("2回目importした");

import "./index.js";
console.log("3回目importした");

// 予想：はじめの1回しかimportされない
// 呼ばれた！
// 1回目importした
// 2回目importした
// 3回目importした

// 結果：予想通り！
// 呼ばれた！
// 1回目importした
// 2回目importした
// 3回目importした
