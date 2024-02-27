/**
 * 链表结构
 */
export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;

    constructor(val: T, next?: ListNode<T>) {
        this.val = val;
        this.next = next || null;
    }
}

/**
 * 通过传入的数组，创建一个链表，并返回
 * @param array 是的房东发
 */
export function createListNodeFromArray<T>(array: T[]): ListNode<T> | null {
    if (!array.length) return null;

    let head = new ListNode(0);
    let current = head as ListNode<T>;

    for (let i = 0; i < array.length; i++) {
        current.next = new ListNode(array[i]);
        current = current.next;
    }

    return head.next as ListNode<T>;
}

/**
 * 通过传入的链表，创建一个数组，并返回
 */
export function createArrayFromListNode<T>(listNode: ListNode<T> | null): T[] {
    if (!listNode) return [];
    const result: T[] = [];

    while (listNode) {
        result.push(listNode.val);
        listNode = listNode.next;
    }

    return result;
}

/**
 * 深度比较两个链表是否相等
 */
export function compareTwoListNode<T>(listNodeA: ListNode<T> | null, listNodeB: ListNode<T> | null): boolean {
    if (listNodeA === listNodeB) return true;
    if ((listNodeA && !listNodeB) || (!listNodeA && listNodeB)) return false;

    while (listNodeA || listNodeB) {
        if (listNodeA?.val === listNodeB?.val) {
            listNodeA = listNodeA?.next || null;
            listNodeB = listNodeB?.next || null;
        } else {
            return false;
        }
    }

    return true;
}
