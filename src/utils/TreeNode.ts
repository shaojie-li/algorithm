export class TreeNode {
    public val: TreeNode | number;
    public left?: TreeNode | null;
    public right?: TreeNode | null;

    constructor(val: TreeNode, left: TreeNode, right: TreeNode) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
