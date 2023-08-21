import { TreeNode } from "./utils/TreeNode";

/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 *
 * ******
 * ### 示例1：
 * ![image](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
 * > 输入：root = [4,2,7,1,3,6,9] -> 输出：[4,7,2,9,6,3,1]
 *
 * ******
 * ### 示例2：
 * ![image](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
 * > 输入：root = [2,1,3] -> 输出：[2,3,1]
 *
 * ******
 * ### 示例3：
 * > 输入：root = [] -> 输出：[]
 */
export const invertTree = (root: TreeNode | null | undefined): TreeNode | null => {
    if (!root) return null;

    const tempLeftNode = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tempLeftNode);

    return root;
};
