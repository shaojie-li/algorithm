/**
 * 两数相加
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * **示例1**
 *
 * ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg)
 * ```
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 数据结构：链表
 * ```
 *
 * **示例2**
 *
 * ```
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * ```
 *
 * **示例3**
 *
 * ```
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * ```
 */
import { createArrayFromListNode, createListNodeFromArray, ListNode } from "../utils/ListNode";

export function addTwoNumbers(l1: number[], l2: number[]) {
    let _l1 = createListNodeFromArray(l1)!;
    let _l2 = createListNodeFromArray(l2)!;
    let _l3 = new ListNode(0);
    let ansNode = _l3;
    // 下一次的值是否进一位
    let carry = 0;

    while (_l1 || _l2) {
        const v1 = _l1?.val || 0;
        const v2 = _l2?.val || 0;
        let val = v1 + v2 + carry;

        // val % 10：如果val小于10，就取其本身，否则取模的值（即原始值，比如 7 % 10，就是 7 本身）
        // 示例1: 7 % 10 = 7；示例2: 12 % 10 = 2；
        _l3.next = new ListNode(val % 10);
        // carry只可能是0或者1，因为每个节点只能存储 一位 数字
        // 两数相加最多只能是 9 + 9 = 18，除以10后向下取整，只能是 0 或 1
        carry = Math.floor(val / 10);

        _l1 && (_l1 = _l1.next!);
        _l2 && (_l2 = _l2.next!);

        _l3 = _l3.next;
    }

    return createArrayFromListNode(ansNode.next);
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
