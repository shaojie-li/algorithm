import { handOutCandy } from "../src/hand-out-candy";

describe("分发糖果", function () {
    it("输入 [1, 2, 2]，最小糖果总数为 4", function () {
        expect(handOutCandy([1, 2, 2])).toEqual(4);
    });

    it("输入 [1,0,2]，最小糖果总数为 4", function () {
        expect(handOutCandy([1, 0, 2])).toEqual(5);
    });
});
