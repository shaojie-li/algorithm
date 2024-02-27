/**
 * 跳跃游戏 1
 *
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 *
 * 示例 1：
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3步，到达最后一个下标。
 *
 * 示例 2：
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 */

/**
 * 思路：如果一个索引位置对应的其可跳跃的步数可以覆盖到最后一个索引位置，则为true
 */
export const jumpGameI = function (nums: number[]) {
    // 边界情况
    if (nums.length === 1) return true;

    // 保存能跳到最远的位置
    let maxJump = 0;

    for (let i = 0; i <= maxJump; i++) {
        maxJump = Math.max(nums[i] + i, maxJump);
        if (maxJump >= nums.length - 1) return true;
    }
    return false;
};

console.log(jumpGameI([2, 3, 2, 1, 0, 2, 0]));
