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

// 今回の場合はswitchの方がインデントが揃うので可読性が高く思える
// switchの場合、評価する変数が決まっていてその値で分岐する場合に良い
// if-elseは、条件を自由に書けるため、一つの変数に限らず条件を細かく指定して分岐できる
