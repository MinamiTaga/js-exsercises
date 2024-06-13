import { count } from "./index.js";

describe('count', () => {
  it('throwを使ってリセットする', () => {
    const counter = count();

    expect(counter.next().value).toBe(0);
    expect(counter.next().value).toBe(1);
    expect(counter.next().value).toBe(2);
    expect(counter.next().value).toBe(3);
    expect(counter.throw('reset').value).toBe(0);
    expect(counter.next().value).toBe(1);
    expect(counter.next().value).toBe(2);
    expect(counter.throw('reset').value).toBe(0);
    expect(counter.next().value).toBe(1);
  })
})