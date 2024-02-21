import { TreeNode } from "src/utils/TreeNode";
import { binaryTreePreorderTraversal, binaryTreePreorderTraversalIterator } from "../src/binary-tree/binary-tree-preorder-traversal";

describe("二叉树的前序遍历", function () {
    describe("递归算法", function () {
        it("[1,null,2,3] 的前序遍历结果为 [1, 2, 3]", function () {
            expect(
                binaryTreePreorderTraversal(
                    new TreeNode(1, { val: undefined }, { val: 2, left: { val: 3 }, right: null }),
                ),
            ).toEqual([1, 2, 3]);
        });

        it("[1, 2, 3, 4] 的前序遍历结果为 [1, 2, 3, 4]", function () {
            expect(
                binaryTreePreorderTraversal(new TreeNode(1, { val: 2 }, { val: 3, left: { val: 4 }, right: null })),
            ).toEqual([1, 2, 3, 4]);
        });

        it("[] 的前序遍历结果为 []", function () {
            expect(binaryTreePreorderTraversal(new TreeNode())).toEqual([]);
        });

        it("[1] 的前序遍历结果为 [1]", function () {
            expect(binaryTreePreorderTraversal(new TreeNode(1))).toEqual([1]);
        });
    });

    describe("迭代算法", function () {
        it("[1, 2, 3] 的前序遍历结果为 [1, 2, 3]", function () {
            expect(
                binaryTreePreorderTraversalIterator(new TreeNode(1, null, { val: 2, left: { val: 3 }, right: null })),
            ).toEqual([1, 2, 3]);
        });

        it("[1, 2, 3, 4] 的前序遍历结果为 [1, 2, 3, 4]", function () {
            expect(
                binaryTreePreorderTraversalIterator(
                    new TreeNode(1, { val: 2 }, { val: 3, left: { val: 4 }, right: null }),
                ),
            ).toEqual([1, 2, 3, 4]);
        });

        it("[] 的前序遍历结果为 []", function () {
            expect(binaryTreePreorderTraversalIterator(new TreeNode())).toEqual([]);
        });

        it("[1] 的前序遍历结果为 [1]", function () {
            expect(binaryTreePreorderTraversalIterator(new TreeNode(1))).toEqual([1]);
        });
    });
});
