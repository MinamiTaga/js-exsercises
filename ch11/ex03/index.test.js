import { littleToBig} from './index.js';

describe('littleToBig', () => {
    it('', () => {
      const num = new Uint32Array([0x12345678]);
      const result = new Uint32Array([0x78563412])

        expect(littleToBig(num)).toEqual(result);
        expect(littleToBig(new Uint32Array([0x00000000]))).toEqual(new Uint32Array([0x00000000]));
        expect(littleToBig(new Uint32Array([0x11111111]))).toEqual(new Uint32Array([0x11111111]));
        expect(littleToBig(new Uint32Array([0x00000001, 0x12312312]))).toEqual(new Uint32Array([0x01000000, 0x12233112]));
    });
});

describe('bigToLittle', () => {
  it('', () => {
    const num = new Uint32Array([0x12345678]);
    const result = new Uint32Array([0x78563412])

      expect(littleToBig(num)).toEqual(result);
      expect(littleToBig(new Uint32Array([0x00000000]))).toEqual(new Uint32Array([0x00000000]));
      expect(littleToBig(new Uint32Array([0x11111111]))).toEqual(new Uint32Array([0x11111111]));
      expect(littleToBig(new Uint32Array([0x00000001, 0x12312312]))).toEqual(new Uint32Array([0x01000000, 0x12233112]));
  });
});