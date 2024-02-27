/**
 * 相交链表
 *
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null 。
 *
 * 图示两个链表在节点 c1 开始相交：
 *
 * ![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png)
 *
 * 思路：
 * - 假设有两个链表，分别为 headA 和 headB
 * - 如果其中一个链表遍历完了还没找到相交节点，则将这个节点指向另外一个没遍历完的 **原始节点**
 * - 如果另一个节点也遍历完了，则将这个节点指向之前那个遍历完了的 **原始节点**
 * - 通过对比，就能得出是否有相交节点
 *
 * 只能在 leetcode 环境中实现
 * [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/description/)
 */
