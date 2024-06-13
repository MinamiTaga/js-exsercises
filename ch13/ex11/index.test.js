import { retryWithExponentialBackoff } from "./index.js";
import { jest } from "@jest/globals";


test('retryWithExponentialBackoff', async () => {
    const func = () => true;
    const callback = jest.fn();
    const res = await retryWithExponentialBackoff(func, 3, callback);

    expect(res).toBe(true);
    expect(callback).toHaveBeenCalledWith(true);
    expect(callback).toHaveBeenCalledTimes(1);


    const func2 = () => false;
    const callback2 = jest.fn();
    const res2 = await retryWithExponentialBackoff(func2, 1, callback);

    expect(res2).toBe(false);
    expect(callback2).not.toHaveBeenCalled();

})