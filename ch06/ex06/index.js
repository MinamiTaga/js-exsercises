export function prop(obj) {
  const props = [];
  for (let key in obj) {
    props.push(key);
  }

  const ownPropertyNames = Object.getOwnPropertyNames(obj);
  const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
  // Reflect.ownKeys(obj)で一気に取れるらしい

  for (let key of ownPropertyNames) {
    if (!props.includes(key)) {
      props.push(key);
    }
  }

  for (let key of ownPropertySymbols) {
    if (!props.includes(key)) {
      props.push(key);
    }
  }
  return props;
}

// console.log(prop({a: 2, f: 3}))
