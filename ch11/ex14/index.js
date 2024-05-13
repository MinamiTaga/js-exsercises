
export function sortJapanese (arr) {
  
  const sorter = (a, b) => {
    const normalize = (str) => 
      str
        .toLowerCase() // 大文字を小文字に変換
        .replace(/[\u3041-\u3096]/g, (match) =>
          String.fromCharCode(match.charCodeAt(0) + 0x60)
        ) // ひらがなをカタカナに変換
        .replace(/[\u30a1-\u30f6]/g, (match) =>
          String.fromCharCode(match.charCodeAt(0) - 0x60)
        ); // カタカナをひらがなに変換

    const normalizedA = normalize(a);
    const normalizedB = normalize(b);

    if (normalizedA < normalizedB) return -1;
    if (normalizedA > normalizedB) return 1;
    return 0;
  };

  // ソートして結果を返す
  return arr.sort(sorter);
}

export function toJapaneseDateString(date) {
  const year = date.getFullYear();
  let name = "";
  let wareki = year;

  if (year >= 2019) {
    name = '令和';
    wareki -= 2018;
  } else if (year >= 1989) {
    name = '平成';
    wareki -= 1988;
  } else if (year >= 1926) {
    name = '昭和';
    wareki -= 1925;
  } else if (year >= 1912) {
    name = '大正';
    wareki -= 1911;
  } else if (year >= 1868) {
    name = '明治';
    wareki -= 1867;
  }

  return `${name}${wareki}年${date.getMonth() + 1}月${date.getDate()}日`;
}