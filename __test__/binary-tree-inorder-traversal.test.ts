import { binaryTreeInorderTraversal, binaryTreeInorderTraversalIterator } from "src/binary-tree-inorder-traversal";
import { TreeNode } from "src/utils/TreeNode";

describe("二叉树的中序遍历", function () {
    describe("递归算法实现", function () {
        it("[1,null,2,3] 的中序遍历结果为 [1, 3, 2]", function () {
            expect(
                binaryTreeInorderTraversal(
                    new TreeNode(1, { val: undefined }, { val: 2, left: { val: 3 }, right: { val: undefined } }),
                ),
            ).toEqual([1, 3, 2]);
        });

        it("[] 的中序遍历结果为 []", function () {
            expect(binaryTreeInorderTraversal(new TreeNode())).toEqual([]);
        });

        it("[1] 的中序遍历结果为 [1]", function () {
            expect(binaryTreeInorderTraversal(new TreeNode(1))).toEqual([1]);
        });
    });

    describe("迭代算法实现", function () {
        it("[1,null,2,3] 的中序遍历结果为 [1, 3, 2]", function () {
            expect(
                binaryTreeInorderTraversalIterator(
                    new TreeNode(1, { val: undefined }, { val: 2, left: { val: 3 }, right: { val: undefined } }),
                ),
            ).toEqual([1, 3, 2]);
        });

        it("[] 的中序遍历结果为 []", function () {
            expect(binaryTreeInorderTraversalIterator(new TreeNode())).toEqual([]);
        });

        it("[1] 的中序遍历结果为 [1]", function () {
            expect(binaryTreeInorderTraversalIterator(new TreeNode(1))).toEqual([1]);
        });

        it("[1, null, 3, 0] 的中序遍历结果为 [1, 0, 3]", function () {
            expect(binaryTreeInorderTraversalIterator(new TreeNode(1, null, { val: 3, left: { val: 0 } }))).toEqual([
                1, 0, 3,
            ]);
        });
    });
});
