import { singleNumberII } from "../src/singlen-number-II";

describe("查找只出现一次的数字（II），不重复的数字会出现三次次", function () {
    it("输入 [2, 1, 1, 1]", function () {
        expect(singleNumberII([2, 1, 1, 1])).toEqual(2);
    });

    it("输入 [4, 1, 0, 0, 1]", function () {
        expect(singleNumberII([4, 1, 1, 0, 0, 1, 0])).toEqual(4);
    });
});
