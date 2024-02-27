/**
 * 删除 **排序** 链表中的重复元素
 *
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表
 *
 * **示例 1**
 *
 * ![](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)
 * ```
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * ```
 *
 * **示例 2**
 *
 * ![](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)
 * ```
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 * ```
 *
 * 思路：
 * 1. 注意题目给到的是 **已排序的链表**，数组表现形式就是：[1, 1, 2, 2, 3]，而不会是 [1, 2, 1, 3, 1]
 * 2. 所以，可以用当前节点的val与下一个节点的val进行对比，如果相等，则删除当前节点
 * 3. 节点遍历完，就能删除重复节点了
 */

import { createArrayFromListNode, createListNodeFromArray } from "../utils/ListNode";

export function deleteDuplicatesI(array: number[]): number[] {
    if (!array.length) return [];
    if (array.length === 1) return array;

    let head = createListNodeFromArray(array);
    let node = head;

    while (node?.next) {
        if (node.val === node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }

    return createArrayFromListNode(head);
}

console.log(deleteDuplicatesI([1, 2, 2, 2, 3, 3]));
