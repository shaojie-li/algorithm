import { TreeNode } from "../utils/TreeNode";

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
        if (typeof _root.val === "number") {
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
    if (!root) return res;

    const stack = [{ node: root, isVisited: false }];

    while (stack.length) {
        const { node, isVisited } = stack.pop()!;

        console.log({ node, isVisited });
        if (isVisited) {
            typeof node.val === "number" && res.push(node.val);
        } else {
            stack.push({ node, isVisited: true });
            node?.right && stack.push({ node: node.right, isVisited: false });
            node?.left && stack.push({ node: node.left, isVisited: false });
        }
    }

    return res;
};

const treeNode_test = new TreeNode(
    1,
    { val: 3, left: { val: 4 }, right: { val: 5 } },
    { val: 7, left: { val: 0 }, right: { val: 9 } },
);

console.log(binaryTreePostorderTraversalIterator(treeNode_test));
