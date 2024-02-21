import { fisherYatesShuffle } from "../src/shuffle";

describe("Fisher–Yates shuffle 洗牌算法", function () {
    it("输入 [1, 2, 3, 4, 5, 6]，返回的长度为6", function () {
        expect(fisherYatesShuffle([1, 2, 3, 4, 5, 6])).toHaveLength(6);
    });

    it("输入 [1, 2, 3, 4, 5, 6]，返回的数组中的元素在参数中都存在", function () {
        const argArray = [1, 2, 3, 4, 5, 6];
        const shuffledArray = fisherYatesShuffle(argArray);

        argArray.forEach(item => {
            expect(shuffledArray).toContain(item);
        });
    });
});
