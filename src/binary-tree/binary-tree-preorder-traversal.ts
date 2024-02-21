import { TreeNode } from "../utils/TreeNode";

/**
 * 二叉树的前序遍历
 * ******
 *
 * > 定义：先访问根节点，再访问左子节点，最后访问右子节点
 *
 *  递归算法实现
 */
export const binaryTreePreorderTraversal = (root: TreeNode | null | undefined): number[] => {
    const res: number[] = [];

    const _preorderTraversal = (_root: TreeNode | null | undefined) => {
        if (!_root) return;
        if (_root?.val) {
            res.push(_root.val);
        }

        _preorderTraversal(_root?.left);
        _preorderTraversal(_root?.right);
    };
    _preorderTraversal(root);

    return res;
};

/**
 * 二叉树的前序遍历
 * ******
 *
 * 迭代算法实现
 */
export const binaryTreePreorderTraversalIterator = (root: TreeNode | null): number[] => {
    if (!root) return [];

    const res: number[] = [];
    const stack = [root];

    while (stack.length) {
        // 出栈一条数据，即取栈顶数据（最后一条进栈的数据）
        const node = stack.pop();
        // 如果出栈的数据的val有值，将它存入结果中
        typeof node?.val === "number" && res.push(node.val);

        // 如果左右节点存在，则先将右子节点押入栈中，再押入左子节点
        // 押入栈中的先后顺序很重要，因为先序遍历的顺序是根、左、右，右是最后一个需要取出的，然后是左
        // 此时用了栈这个数据结构，所以右子节点需要先押入栈中
        node?.right && stack.push(node.right);
        node?.left && stack.push(node.left);
    }

    return res;
};
