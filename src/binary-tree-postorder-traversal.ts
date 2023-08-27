import { TreeNode } from "./utils/TreeNode";

/**
 * 二叉树的后序遍历
 * ******
 *
 * > 定义：先访问左子节点，再访问右子节点，最后访问根节点
 *
 * 递归算法实现
 */
export const binaryTreePostorderTraversal = (root: TreeNode | null | undefined) => {
    const res: number[] = [];

    const _postorderTraversal = (_root: TreeNode | null | undefined) => {
        if (!_root) return;

        _postorderTraversal(_root.left);
        _postorderTraversal(_root.right);
        if (_root.val) {
            res.push(_root.val);
        }
    };
    _postorderTraversal(root);

    return res;
};

/**
 * 二叉树的后序遍历
 * ******
 *
 * 迭代算法实现
 */
export const binaryTreePostorderTraversalIterator = (root: TreeNode | null | undefined) => {
    const res: number[] = [];

    return res;
};
