export function loggingProxy(o) {
  const history = [];

  const handleres = {
    get(target, property, receiver) {
      const result = Reflect.get(target, property, receiver);
      console.log(target[property], typeof target[property]);

      // メソッドならログを追加する
      if (typeof target[property] === "function") {
        return function (...args) {
          const result = Reflect.apply(target[property], receiver, args);
          history.push({
            timestamp: new Date(),
            method: property,
            parameters: args.toString(),
          });
          return result;
        };
      }
      return result;
    },
  };

  const proxy = new Proxy(o, handleres);
  return { proxy, history };
}
