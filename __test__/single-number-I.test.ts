import { singleNumberI } from "../src/single-number-I";

describe("查找只出现一次的数字（I），不重复的数字会出现两次", function () {
    it("输入 [2, 1, 1]", function () {
        expect(singleNumberI([2, 1, 1])).toEqual(2);
    });

    it("输入 [4, 1, 0, 0, 1]", function () {
        expect(singleNumberI([4, 1, 0, 0, 1])).toEqual(4);
    });
});
