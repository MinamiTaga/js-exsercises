import { expect } from "@playwright/test";
import { loggingProxy } from "./index.js";

test("loggingProxy", () => {
  const data = [10, 20];
  const methods = { square: (x) => x * x };

  const { proxy: dataProxy, history: dataHis } = loggingProxy(data, "data");
  const { proxy: methodsProxy, history: methodsHis } = loggingProxy(
    methods,
    "methods"
  );

  expect(dataProxy.map(methodsProxy.square)).toStrictEqual(
    data.map((d) => methods.square(d))
  );

  expect(methodsHis.length).toEqual(2);
  expect(methodsHis[0].method).toBe("square");
  expect(methodsHis[0].parameters).toBe("10,0,10,20"); // args[i], i, ...args
  expect(methodsHis[1].method).toBe("square");
  expect(methodsHis[1].parameters).toBe("20,1,10,20");

  expect(dataHis[0].parameters).toBe(""); // join
  expect(dataHis[1].parameters).toBe(""); // toString
  expect(dataHis[2].parameters).toBe(""); // join
  expect(dataHis[3].parameters).toBe(""); // toString
  expect(dataHis[4].method).toBe("map");
  expect(dataHis[4].parameters).toBe(`${methodsProxy.square}`);
});
