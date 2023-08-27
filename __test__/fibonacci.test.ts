import { fibonacci } from "src/fibonacci";

describe("求斐波那契的第N个值", function () {
    it("第0个值", function () {
        expect(fibonacci(0)).toEqual(0);
    });

    it("第1个值", function () {
        expect(fibonacci(1)).toEqual(1);
    });

    it("第2个值", function () {
        expect(fibonacci(2)).toEqual(1);
    });

    it("第3个值", function () {
        expect(fibonacci(3)).toEqual(2);
    });

    it("第5个值", function () {
        expect(fibonacci(5)).toEqual(5);
    });

    it("第21个值", function () {
        expect(fibonacci(9)).toEqual(34);
    });
});
