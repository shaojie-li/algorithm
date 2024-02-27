import { invertTree } from "../src/binary-tree/invert-binary-tree";
import { TreeNode } from "src/utils/TreeNode";

describe("翻转二叉树", function () {
    it("输入 [4,2,7,1,3,6,9]，输出 [4,7,2,9,6,3,1]", function () {
        expect(
            invertTree(
                new TreeNode(
                    4,
                    { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } },
                    { val: 7, left: { val: 6, left: null, right: null }, right: { val: 9, left: null, right: null } },
                ),
            ),
        ).toStrictEqual(
            new TreeNode(
                4,
                { val: 7, left: { val: 9, left: null, right: null }, right: { val: 6, left: null, right: null } },
                { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } },
            ),
        );
    });

    it("输入 [2, 1, 3]，输出 [2, 3, 1]", function () {
        expect(invertTree(new TreeNode(2, { val: 1 }, { val: 3 }))).toStrictEqual(
            new TreeNode(2, { val: 3, left: null, right: null }, { val: 1, left: null, right: null }),
        );
    });
});
