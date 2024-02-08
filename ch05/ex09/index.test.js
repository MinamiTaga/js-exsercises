import { parser } from ".";

describe(parser, () => {
  it('期待値を返す', () => {
    expect(parser('abc').success).toEqual(false);
    expect(parser('abc').error).toBeTruthy();
    expect(parser('abc').data).toBeFalsy();
    expect(parser('{"abc": "ABC"}').success).toEqual(true);
    expect(parser('{"abc": "ABC"}').data).toEqual({"abc": "ABC"});
    expect(parser('{"abc": "ABC"}').error).toBeFalsy();
  })
})