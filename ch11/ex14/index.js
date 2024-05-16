
export function sortJapanese (arr) {
  
  const collator = new Intl.Collator('ja', {
    // 大文字・小文字("つ"と"っ"等)、濁点・半濁点("は"と"ば"と"ば"等)の違いを無視
    sensitivity: 'base', 
    usage: 'sort'
}).compare;

  // ソートして結果を返す
  return arr.sort(collator);
}

export function toJapaneseDateString(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    era: 'long',
    calendar: 'japanese',
    timeZone: 'Asia/Tokyo'
};

const formatter = new Intl.DateTimeFormat('ja-JP', options);
return formatter.format(date);
}

// export function toJapaneseDateString(date) {
//   const year = date.getFullYear();
//   let name = "";
//   let wareki = year;

//   if (year >= 2019) {
//     name = '令和';
//     wareki -= 2018;
//   } else if (year >= 1989) {
//     name = '平成';
//     wareki -= 1988;
//   } else if (year >= 1926) {
//     name = '昭和';
//     wareki -= 1925;
//   } else if (year >= 1912) {
//     name = '大正';
//     wareki -= 1911;
//   } else if (year >= 1868) {
//     name = '明治';
//     wareki -= 1867;
//   }

//   return `${name}${wareki}年${date.getMonth() + 1}月${date.getDate()}日`;
// }