import { createListNodeFromArray } from "../utils/ListNode";

/**
 * 找到链表的中间结点
 *
 * 示例 1：
 * - 输入：`head = [1,2,3,4,5]`
 * - 输出：`[3,4,5]`
 * - 解释：链表只有一个中间结点，值为 3
 * - ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)
 *
 * 示例 2：
 * - 输入：head = [1,2,3,4,5,6]
 * - 输出：[4,5,6]
 * - 解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点
 * - ![](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)
 *
 * 思路：快慢指针，快指针比满指针快两倍的速度
 */
export function middleNode(array: number[]): number | null {
    if (!array.length) return null;

    let fast = createListNodeFromArray(array);
    let slow = createListNodeFromArray(array);

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }

    return slow?.val || null;
}

console.log(middleNode([1, 2, 3, 4, 5]));
