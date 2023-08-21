import { TreeNode } from "./utils/TreeNode";

/**
 * 二叉树的中序遍历
 * ******
 *
 * > 定义：先访问左子节点，再访问父节点，最后访问右子节点
 * 思路：
 * 1. 递归实现
 * 2. 迭代实现（TODO）
 */
export const binaryTreeInorderTraversal = (root: TreeNode | null | undefined): number[] => {
    const res: number[] = [];

    // 需要定义一个闭包，保存结果
    const _inorderTraversal = (_root: TreeNode | null | undefined) => {
        if (!_root) return;

        _inorderTraversal(_root.left);
        if (typeof _root.val === "number") {
            res.push(_root.val);
        }
        _inorderTraversal(_root.right);
    };

    _inorderTraversal(root);
    return res;
};
