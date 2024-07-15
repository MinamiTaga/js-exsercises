import { Hiragana } from "./index.js"

describe('Hiragana', () => {
  it('数値を期待', () => {
    const a = new Hiragana('あ');
    const i = new Hiragana('い');
    const n = new Hiragana('ん');

    expect(a < i).toBe(true);
    expect(a < i).toBe(true);
    expect(i < n).toBe(true);
    expect(i - a).toBe(2);
    expect(Number(a)).toBe(12354);
  })

  it('文字列を期待', () => {
    const a = new Hiragana('あ');
    const i = new Hiragana('い');
    const n = new Hiragana('ん');

    expect(a + i + a + i).toBe('あいあい');
    expect(a + n + 'こ').toBe('あんこ');
    expect(`${a}${i}${n}`).toBe('あいん');
    expect(a == 'あ').toBe(true);
    expect(a != 12354).toBe(true);
    
  })

  it('どちらでもないとき', () => {
    const a = new Hiragana('あ'); 

    expect(new Date(a).toString()).toBe(new Date('あ').toString());
    expect(new Date(a).toString()).not.toBe(new Date(12354).toString()); // 12354は「あ」の文字コード
  })
})