import { TreeNode } from "./utils/TreeNode";

/**
 * 二叉搜索树
 * ******
 *
 * 二叉搜索树的特性：
 * 1. 若左子树有值，则左子树的值小于当前根节点的值
 * 2. 若右子树有值，则右子树的值大于当前根节点的值
 * 3. 任意节点的左右子树的特性同上
 */
export class BinaryTreeSearch {
    constructor(public root: TreeNode | null | undefined) {}

    /**
     * 思路：二叉搜索树的中序遍历是按从小到大排序的，按照这个特征编写代码即可
     */
    public isValidate() {
        if (!this.root?.val) return false;

        const stack: TreeNode[] = [];
        let _root: TreeNode | null | undefined = this.root;
        // 记录前一个遍历的节点的值
        // 如果是一颗合法的二叉搜索树，对其进行中序遍历，当前遍历到的节点的值肯定大于或等于这个值
        let pre = -Infinity;

        while (_root || stack.length) {
            while (_root) {
                stack.push(_root);
                _root = _root.left;
            }

            const node = stack.pop();
            if (typeof node?.val === "number" && pre > node.val) {
                return false;
            }

            typeof node?.val === "number" && (pre = node?.val);
            _root = node?.right;
        }

        return true;
    }
}

// true
const param_1 = new TreeNode(
    10,
    { val: 7, left: { val: 0 }, right: { val: 8, left: null } },
    { val: 15, left: { val: 12 }, right: { val: 16 } },
);

// false
const param_2 = new TreeNode(2, { val: 1 }, { val: 3 });

const param_3 = new TreeNode(5, { val: 1 }, { val: 4, left: { val: 3 }, right: { val: 6 } });

const param_4 = new TreeNode(2, { val: 2 }, { val: 2 });

// [5,4,6,null,null,3,7]
const param_5 = new TreeNode(5, { val: 4 }, { val: 6, left: { val: 3 }, right: { val: 7 } });

const test = new BinaryTreeSearch(param_2);

console.log(test.isValidate());
