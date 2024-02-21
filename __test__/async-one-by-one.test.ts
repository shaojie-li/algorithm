import { asyncOneByOne } from "../src/async-one-by-one";

describe("任务队列按顺序执行", function () {
    // 模拟一个异步函数
    const mockAsyncFunc1 = jest.fn(callback => {
        setTimeout(() => {
            typeof callback === "function" && callback();
        }, 100);
    });
    const mockAsyncFunc2 = jest.fn(callback => {
        setTimeout(() => {
            typeof callback === "function" && callback();
        }, 100);
    });
    const mockAsyncFunc3 = jest.fn(callback => {
        setTimeout(() => {
            typeof callback === "function" && callback();
        }, 100);
    });

    beforeEach(() => {
        jest.useFakeTimers(); // 使用 Jest 提供的 fake timers
    });

    afterEach(() => {
        jest.runOnlyPendingTimers(); // 清除所有定时器
        mockAsyncFunc1.mockClear(); // 清除 mock 函数的调用情况
        mockAsyncFunc2.mockClear(); // 清除 mock 函数的调用情况
        mockAsyncFunc3.mockClear(); // 清除 mock 函数的调用情况
    });

    it("参数中的所有函数都有被执行 ", function () {
        const func1 = mockAsyncFunc1;
        const func2 = mockAsyncFunc2;
        const func3 = mockAsyncFunc3;

        asyncOneByOne([func1, func2, func3]);

        // 执行完第一个函数后，断言该函数被调用一次
        jest.advanceTimersByTime(100);
        expect(func1).toHaveBeenCalledTimes(1);

        // 执行完第二个函数后，断言该函数被调用一次
        jest.advanceTimersByTime(100);
        expect(func2).toHaveBeenCalledTimes(1);

        // 执行完第三个函数后，断言该函数被调用一次
        jest.advanceTimersByTime(100);
        expect(func3).toHaveBeenCalledTimes(1);
    });
});
