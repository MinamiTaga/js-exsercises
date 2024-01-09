export const replaceCode = (code) => {

  let output = '';
  const codes = code.split('\n');

  for (let i = 0; i < codes.length; i++) {
    output += codes[i];

    // １番最後は後ろに\nがつかないので除く
    if (i < codes.length - 1) {
      // \rで終わっている時は\nだけつける
      if(codes[i].endsWith('\r')) {
        output = output.slice(0, -1)+'\n'
      // そうじゃなければ、\r\nをつける
      } else {
        output += '\r\n';
      }
    }
}
  return output;
}
