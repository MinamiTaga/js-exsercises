import { retryWithExponentialBackof } from "./index.js";
import { jest } from "@jest/globals";


describe("retryWithExponentialBackof", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockCallback = jest.fn();

  it("func returns true", () => {
    const mock1 = jest.fn(() => true);

    retryWithExponentialBackof(mock1, 2, mockCallback)
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(true);
  });

  it("func returns false", () => {
    const mock = jest.fn(() => false);

    // テストできてない
    retryWithExponentialBackof(mock, 3, mockCallback);
    expect(mock).toHaveBeenCalledTimes(4);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(false);
  });

  it.only("func returns true after two times false", () => {
    const mock = jest.fn(() => {
      let count = 0;

      return function () {
        count++;
        return count === 3;
      }();
    });

    retryWithExponentialBackof(mock, 3, mockCallback);
    expect(mock).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(false);
  });
});
