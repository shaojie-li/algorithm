/**
 * 移除链表元素
 *
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 *
 * **示例1**
 * ```
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 * ```
 *
 * **示例2**
 * ```
 * 输入：head = [], val = 1
 * 输出：[]
 * ```
 *
 * **示例3**
 * ```
 * 输入：head = [7,7,7,7], val = 7
 * 输出：[]
 * ```
 */

import { createArrayFromListNode, createListNodeFromArray, ListNode } from "../utils/ListNode";

export function removeElements(array: number[], val: number): number[] {
    if (!array.length) return [];

    let head = createListNodeFromArray(array);
    let node = head;

    // 先删除头节点
    while (head && head.val === val) {
        head = head.next;
    }

    while (node?.next && head) {
        // 删除链表中，值等于参数 val 的链表
        if (node.next?.val === val) {
            node.next = node.next?.next;
        } else {
            node = node.next;
        }
    }

    return createArrayFromListNode(head);
}

console.log(removeElements([1, 2, 6, 3, 4, 5, 6], 6));
console.log(removeElements([], 1));
console.log(removeElements([7, 7, 7, 7], 7));
