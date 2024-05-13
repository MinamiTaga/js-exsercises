import { cachedSlowFn } from "./index.js";

describe("cachedSlowFn", () => {
  it('2回目以降はキャッシュを返すので1回目が1番時間がかかる', () => {
    const obj = {};

    // 1回目
    const startTime1 = performance.now();
    cachedSlowFn(obj);
    const endTime1 = performance.now();
    const time1 = endTime1 - startTime1
  
    // 2回目
    const startTime2 = performance.now();
    cachedSlowFn(obj);
    const endTime2 = performance.now();
    const time2 = endTime2 - startTime2
  
    // 3回目
    const startTime3 = performance.now();
    cachedSlowFn(obj);
    const endTime3 = performance.now();
    const time3 = endTime3 - startTime3
  
  
    expect(time1 > time2).toBe(true);
    expect(time1 > time3).toBe(true);
  })
});
