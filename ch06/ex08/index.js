export function restrict(target, template) {
  const tmpKeys = Object.getOwnPropertyNames(template);

  for (let key in target) {
    let isDelete;
    if (!tmpKeys) {
      isDelete = true;
    } else {

      isDelete = tmpKeys.every((tmpKey) => {
        if (tmpKey === key) return false;

        return true;
      })

      if (isDelete) {
        delete target[key];
      }
    }


  }
  return target;
};


export function substract(target, ...sources) {
  sources.forEach((source) => {
    const srcKeys = Object.getOwnPropertyNames(source);
    // if (!srcKeys) return;
    for (let key in target) {
      srcKeys.forEach((srcKey) => {
        if (key === srcKey) {
          console.log(key, srcKey)

          delete target[key]
        }
      })
    }
  })
  return target;
};