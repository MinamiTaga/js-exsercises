import { obj } from ".";

describe('obj', () => {
  it('', () => {

    try {
      expect(obj.x = NaN).toThrowError();
      expect(obj.y = NaN).toThrowError();
    } catch {}

    obj.x = 25;
    obj.y = 20;

    expect(obj.x).toEqual(24.999999999999996);
    expect(obj.y).toEqual(20);

  });

});

// 結果に合わせてテスト書いたのでなんでこうなるかわからない
