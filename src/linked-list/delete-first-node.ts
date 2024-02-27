/**
 * 删除链表中的第一个节点
 */
import { createArrayFromListNode, createListNodeFromArray } from "../utils/ListNode";

export function deleteFirstNode(array: number[]) {
    if (!array.length) return null;

    // 假定要删除链表中的 val === 1 的节点
    let node = createListNodeFromArray(array);

    //  没有next，说明链表中只有一个节点，直接返回 null
    if (!node?.next) return null;

    node.val = node.next!.val;
    node.next = node.next?.next || null;

    return node;
}

console.log(createArrayFromListNode(deleteFirstNode([1, 3, 2, 1, 3, 2])));
