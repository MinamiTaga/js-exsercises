process.stdin.setEncoding('utf-8');
let codes = [];

// 入力文字列を１行ずつ配列に入れる
  for await (const chunk of process.stdin) {
    codes = chunk.split('\n') 
  }

  console.log(codes.length)

  // 全ての行の末尾に;をつける(空行は除く)
  for (let i = 0; i<codes.length; i++) {
  console.log(codes[i])
    if(codes[i] !== '') {
      codes[i] = `${codes[i]};`
    }
  }

  console.log(codes)