export const isWeekend = (day) => {

  if (day === '土' || '日' ) {
    console.log(day)
    return true
  } else if(day === '月' || '火' || '水' || '木' || '金') {
    return false
  };
}

export const isWeekend2 = (day) => {
  switch (day) {
    case '土' || '日':
      return true;
    case '月' || '火' || '水' || '木' || '金':
      return false;
  }
}

// switchの方がインデントが揃うので可読性が高く思える
// switchの場合条件に書けばいくつものcaseの操作を行うことができる？
