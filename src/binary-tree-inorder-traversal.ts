import { TreeNode } from "./utils/TreeNode";

/**
 * 二叉树的中序遍历
 * ******
 *
 * > 定义：先访问左子节点，再访问父节点，最后访问右子节点
 *
 * 递归算法实现
 */
export const binaryTreeInorderTraversal = (root: TreeNode | null | undefined): number[] => {
    const res: number[] = [];

    // 需要定义一个闭包，保存结果
    const _inorderTraversal = (_root: TreeNode | null | undefined) => {
        if (!_root) return;

        _inorderTraversal(_root.left);
        if (_root.val) {
            res.push(_root.val);
        }
        _inorderTraversal(_root.right);
    };

    _inorderTraversal(root);
    return res;
};

/**
 * 二叉树的中序遍历
 * ******
 *
 * 递归算法实现
 */
export const binaryTreeInorderTraversalIterator = (root: TreeNode | null | undefined) => {
    if (!root) return [];

    const res: number[] = [];
    const stack: TreeNode[] = [];

    while (root || stack.length) {
        // 先将根节点和左子节点入栈
        while (root) {
            // 将根节点先入栈存起来
            stack.push(root);
            // 再将左子节点赋值给root，下一次进入循环的时候，继续将左子节点入栈，直到没有左子节点
            root = root.left;
        }

        // 按照栈先进后出的特性，先取栈中最后一个节点并出栈
        root = stack.pop();
        // 将当前节点的val值放入结果中
        typeof root?.val === "number" && res.push(root.val);
        root = root?.right || null;
    }
    console.log(11, res);
    return res;
};

binaryTreeInorderTraversalIterator(
    new TreeNode(1, { val: 3, left: { val: 4 }, right: {val: 5} }, { val: 7, left: { val: 0 }, right: { val: 9 } }),
);
