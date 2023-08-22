import { binaryTreePostorderTraversal } from "src/binary-tree-postorder-traversal";
import { TreeNode } from "src/utils/TreeNode";

describe("二叉树的后序遍历", function () {
    it("[1, null, 2, 3] 的后序遍历结果为 [1, 3, 2]", function () {
        expect(
            binaryTreePostorderTraversal(
                new TreeNode(1, { val: undefined }, { val: 2, left: { val: 3 }, right: { val: undefined } }),
            ),
        ).toEqual([3, 2, 1]);
    });

    it("[] 的后序遍历结果为 []", function () {
        expect(binaryTreePostorderTraversal(new TreeNode())).toEqual([]);
    });

    it("[1] 的后序遍历结果为 [1]", function () {
        expect(binaryTreePostorderTraversal(new TreeNode(1))).toEqual([1]);
    });
});
