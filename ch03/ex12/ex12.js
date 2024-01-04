const obj1 = {x:1};
obj1.y = 2;

const obj2 = { x: 1, y: 2 };

if (obj1 === obj2) {
  console.log('obj1 === obj2')
} else {
  console.log('obj1 === obj2ではない')
  // こっちだった
}

export const equals = (obj1, obj2) => {
  if(obj1 === obj2) return true;
  if(obj1.length !== obj2.length) return false;
  for(let i = 0; i < obj1.length; i++) {
    if(obj1[i] !== obj2[i]) return false;
  }
  return true;
}