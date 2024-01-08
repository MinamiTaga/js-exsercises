import { replaceCode } from "./ex05.js";

describe('replaceCode', () => {

  it('LFがCR+LFに置換される', () => {
    const inputStr = "Hello\nWorld!";
    const expectedStr = "Hello\r\nWorld!";
    expect(replaceCode(inputStr)).toEqual(expectedStr);
  })
  it('CR+LFがLFに置換される', () => {
    const inputStr = "Hello\r\nWorld!";
    const expectedStr = "Hello\nWorld!";
    expect(replaceCode(inputStr)).toEqual(expectedStr);
  })
  it('CR+LFとLFがどちらも置換される', () => {
    const inputStr = "Hello\nWorld!\r\nJS!";
    const expectedStr = "Hello\r\nWorld!\nJS!";
    expect(replaceCode(inputStr)).toEqual(expectedStr);
  })
})