import { days, lastMonthFirstDay, localDay, weekDays } from "./index.js";

test('days', () => {
  expect(days(2024, 5)).toBe(31);
  expect(days(2020, 5)).toBe(31);
  expect(days(2024, 6)).toBe(30);
  expect(days(2050, 1)).toBe(31);
  expect(days(2021, 2)).toBe(28);
  expect(days(2022, 2)).toBe(28);
  expect(days(2023, 2)).toBe(28);
  expect(days(2024, 2)).toBe(29);
})

test('weekDays', () => {
  expect(weekDays('2024-04-01', '2024-04-30')).toBe(22);
  expect(weekDays('2024-05-01', '2024-05-31')).toBe(23);
  expect(weekDays('2024-04-01', '2024-05-31')).toBe(45);
})

test('localDay', () => {
  expect(localDay('2024-04-01', 'ja-JP')).toBe('月曜日');
  expect(localDay('2024-04-02', 'ja-JP')).toBe('火曜日');
  expect(localDay('2024-04-01', 'en-US')).toBe('Monday');
  expect(localDay('2024-04-01', 'zh-CN')).toBe('星期一');
  expect(localDay('2024-04-01', 'ko-KR')).toBe('월요일');
  expect(localDay('2024-04-01', 'fr-FR')).toBe('lundi');

})

test('lastMonthFirstDays', () => {
  const date = new Date(2024, 3, 1, 0, 0, 0)
  expect(lastMonthFirstDay().toLocaleDateString()).toBe(date.toLocaleDateString());

})