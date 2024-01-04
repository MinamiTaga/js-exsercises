import { equals } from "./ex12.js";

describe('equals', () => {
  it('別オブジェクトでも内容が同じならtrueを返す', () => {
    const obj1 = {x:1};
    obj1.y = 2;
    
    const obj2 = { x: 1, y: 2 };

    expect(equals(obj1, obj2)).toBeTruthy();

  })
})