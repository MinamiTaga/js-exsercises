export function substring(str, indexStart, indexEnd) {
  let start = 0;
  let end = str.length;

  // indexStartの値をいい感じにセットする
  if (!indexStart) {
    indexStart = 0
  } else {
    if (indexStart < 0) {
      indexStart = 0
    } else {
      indexStart = parseInt(indexStart)
      indexStart = indexStart < str.length ? parseInt(indexStart) : str.length

    }
  }

  // indexEndの値をいい感じにセットする
  if (indexEnd === undefined) {
    indexEnd = str.length
  } else if (isNaN(indexEnd)) {
    indexEnd = 0
  } else {
    if (indexEnd < 0) {
      indexEnd = 0;
    } else {
      indexEnd = indexEnd < str.length ? parseInt(indexEnd) : str.length
    }
  }

  // indexStart と indexEndの大小関係によって入れ替える
  if (indexStart > indexEnd) {
    start = indexEnd;
    end = indexStart;
  } else {
    start = indexStart;
    end = indexEnd;
  }
  // [start, end] = (indexStart < indexEnd) ? [indexStart, indexEnd] : [imdexEnd, indexStart];

  const input = [...str];
  let prod = '';
  for (let i = start; i < end; i++) {
    prod = prod + input[i]
  }
  return prod;
}

export function slice(str, indexStart, indexEnd) {
  // indexStartの値をいい感じにセットする
  if (!indexStart) {
    indexStart = 0
  } else {
    if (indexStart < 0) {
      indexStart = (str.length + parseInt(indexStart)) > 0 ? str.length + parseInt(indexStart) : 0;
    } else {
      indexStart = parseInt(indexStart)
    }
  }

  // indexEndの値をいい感じにセットする
  if (indexEnd === undefined) {
    indexEnd = str.length;
  } else if (isNaN(indexEnd)) {
    indexEnd = 0;
  } else {
    if (indexEnd < 0) {
      indexEnd = str.length + parseInt(indexEnd)
    } else {
      indexEnd = indexEnd < str.length ? parseInt(indexEnd) : str.length
    }
  }

  const input = [...str];
  let prod = '';
  for (let i = indexStart; i < indexEnd; i++) {
    prod = prod + input[i]
  }
  return prod;
}

export function padStart(str, targetLength, padString) {
  const strLength = str.length;
  const padStr = padString ? padString : ' ';
  const padStrLength = padStr.length;
  const shortage = targetLength - strLength; // 足りない文字数
  let prod = '';

  // strがtargetLengthより長ければそのままstrを返す
  if (strLength >= targetLength) str;

  if (padStrLength === shortage) {
    prod = padStr + str;
  } else {
    // 足りない文字数/padStringの余り数だけの文字数追加
    prod = padStr.slice(0, shortage % padStrLength)
    // 足りない文字数/padStringの文字数の商の数だけ繰り返す
    for (let i = 0; i < parseInt(shortage / padStrLength); i++) {
      prod = padStr + prod;
    }
    // １番後ろに元のstrくっつける
    prod = prod + str;
  }
  return prod;
}

export function trim(str) {
  let start = 0;
  let end = str.length - 1;

  // 先頭からの空白を取り除く
  while (start <= end && str[start] === ' ') {
    start++;
  }
  // 末尾からの空白を取り除く
  while (end >= start && str[end] === ' ') {
    end--;
  }

  return str.slice(start, end + 1);
}
