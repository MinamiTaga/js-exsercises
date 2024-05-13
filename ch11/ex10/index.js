export function days(year, month) {
  // monthは０始まりなので次の月の1日をdateとする
  const date = new Date(year, month);
  // 1日前に戻る
  date.setDate(date.getDate() - 1)

  return date.getDate();
}

export function weekDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  let weekDayCount = 0;
  const date = endDate;
  // 開始日当日もカウントしたいので、1日前に戻す
  startDate.setDate(startDate.getDate() - 1);

  while (date.toDateString() !== startDate.toDateString()) {
    // 0:Sun ~ 6:Sat 
    if (0 < date.getDay() && date.getDay() < 6) {
      weekDayCount++;
    }
    date.setDate(date.getDate() - 1)
  }
  return weekDayCount;
}

export function localDay (dateStr, local) {
  const date = new Date(dateStr);
  const dateFormatter = new Intl.DateTimeFormat(local, { weekday: 'long', timeZone: 'UTC' });

  return dateFormatter.format(date);
}

export function lastMonthFirstDay () {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() -1);

  // todayが1日になったらwhileから出てくる
  while (today.getDate() - yesterday.getDate() > 0) {
    today.setDate(today.getDate() -1);
    yesterday.setDate(today.getDate() -1);
  }

  // 先月の日数前に戻る
  today.setDate(1- yesterday.getDate());
  // 時刻を削る
  const day = today.toDateString()

  return new Date(day);
}

