import { twoSum } from "src/two-sum";

describe("两数之和", () => {
    it("twoSum([2, 7, 11, 15], 9)，返回 [1, 0]", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 0]);
    });

    it("twoSum([3, 2, 4], 6)，返回 [2, 1]", () => {
        // twoSum 返回结果等于 POSSIBLE_VALUES 中的其中一项即可通过
        expect(twoSum([3, 2, 4], 6)).toEqual([2, 1]);
    });

    it("twoSum([3, 3], 6)，返回 [1, 0]", () => {
        // twoSum 返回结果等于 POSSIBLE_VALUES 中的其中一项即可通过
        expect(twoSum([3, 3], 6)).toEqual([1, 0]);
    });
});
