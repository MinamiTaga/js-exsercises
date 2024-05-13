function kakko (str) {
  const pattern = /\(\)/;
  const regex = new RegExp(`[^${pattern}}]`, 'g');
  str = str.replace(regex, '');

  while (pattern.test(str)) {
    str = str.replace(pattern, '');
  }

  return str === '';
}

console.log(kakko("(((())))")) // true
console.log(kakko("(１０２９っ)あいうえお")) // true
console.log(kakko("(()(()))")) // true
console.log(kakko("(()(fff(fff)r))")) // true
console.log(kakko("(((())))")) // true
console.log(kakko("(wdefwv((wvw(defv)wvvwvv)wvv)wvw)wvfvdfc")) // true
console.log(kakko("((())")) // false
console.log(kakko("((())")) // false
