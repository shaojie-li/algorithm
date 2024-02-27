/**
 * 删除 **未排序** 链表中的重复元素
 *
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 *
 * 示例1:
 *
 *```
 *  输入：[1, 2, 3, 3, 2, 1]
 *  输出：[1, 2, 3]
 *  ```
 *
 *  ```
 * 示例2:
 *
 *  输入：[1, 1, 1, 1, 2]
 *  输出：[1, 2]
 *```
 *
 * 思路：
 */

import { compareTwoListNode, createArrayFromListNode, createListNodeFromArray, ListNode } from "../utils/ListNode";

// 使用临时缓冲区实现
export function deleteDuplicatesII_1(array: number[]): number[] {
    let head = createListNodeFromArray(array);
    if (!head) return [];

    let node: ListNode<number> | null = head;
    let cache = new Set<number>();
    let ans = new ListNode(0);

    while (node?.next) {
        if (cache.has(node.next.val)) {
            node.next = node.next?.next || null;
        } else {
            node = node.next;
            cache.add(node.val);
        }
    }

    return createArrayFromListNode(head);
}

// 不使用临时缓冲区
export function deleteDuplicatesII_2(array: number[]): number[] {
    const head = createListNodeFromArray(array);

    return [];
}

console.log(deleteDuplicatesII_1([1, 3, 2, 3]));
