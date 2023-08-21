import { binaryTreeInorderTraversal } from "src/binary-tree-inorder-traversal";
import { TreeNode } from "../src/utils/TreeNode";

describe("二叉树的中序遍历", () => {
    it("[1,null,2,3] 的中序遍历结果为 [1, 3, 2]", function () {
        expect(
            binaryTreeInorderTraversal(
                new TreeNode(1, { val: undefined }, { val: 2, left: { val: 3 }, right: { val: undefined } }),
            ),
        ).toEqual([1, 3, 2]);
    });
});
