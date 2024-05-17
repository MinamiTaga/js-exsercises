export function littleToBig(num) {
  const result = new Uint32Array(num.length);
  const dv = new DataView(num.buffer, num.byteOffset, num.byteLength)

  for (let i = 0; i < num.length; i++) {
    dv.setUint32(i * 4, num[i], false) // リトルで格納
    result[i] = dv.getUint32(i * 4, true) // ビッグで取り出し
  }
  return result;
}

export function bigToLittle(num) {
  const result = new Uint32Array(num.length);
  const dv = new DataView(num.buffer, num.byteOffset, num.byteLength)

  for (let i = 0; i < num.length; i++) {
    dv.setUint32(i * 4, num[i], true) // bigで格納
    result[i] = dv.getUint32(i * 4, false) // littleで取り出し
  }
  return result;
}

// littleToBig([0x12345678]);
littleToBig(new Uint32Array([0, 1, 2]))
littleToBig(new Uint32Array([0, 1, 2]))


// これならどちらでも使える
// export function littleToBig(num) {
//   const result = new Uint32Array(num.length);
//   console.log(result) // Uint32Array(1) [ 0 ]

//   for (let i = 0; i < num.length; i++) {
//     // num[i] & 0x000000ff →下位1バイトを抽出
//     const byte1 = (num[i] & 0x000000ff) << 24;  // 左に24ビットシフト
//     const byte2 = (num[i] & 0x0000ff00) << 8;   // 左に8ビットシフト
//     const byte3 = (num[i] & 0x00ff0000) >>> 8;  // 右に8ビットシフト
//     const byte4 = (num[i] & 0xff000000) >>> 24; // 右に8ビットシフト
//     result[i] = byte1 | byte2 | byte3 | byte4;
//   }
//   console.log(result) // Uint32Array(1) [ 2018915346 ]
//   return result;
// }
// もちろんこれでもOK、でもDataViewが簡単だよという話