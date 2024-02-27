/**
 * 跳跃游戏 2
 *
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
 *
 * 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
 *
 * 0 <= j <= nums[i]
 * i + j < n
 * 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
 *
 *
 * 示例 1:
 * 输入: nums = [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 *      从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3步，到达数组的最后一个位置。
 *
 * 示例 2:
 * 输入: nums = [2,3,0,1,4]
 * 输出: 2
 *
 */

/**
 * 思路：如果一个索引位置对应的其可跳跃的步数可以覆盖到最后一个索引位置，则为true
 */
export const jumpGameII = function (nums: number[]) {
    // 保存能跳到最远的位置
    let maxJump = 0;
    // 右边界的索引
    let end = 0;
    // 结果次数
    let result = 0;

    // i < nums.length - 1 最后位置的跳跃不用考虑，所以到倒数第二个为止
    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(nums[i] + i, maxJump);

        // end === i，说明到达当前索引的最大右边界，跳跃次数要加1，带着更新后的右边界进入下一次循环
        if (end === i) {
            end = maxJump;
            // 每次到达边界，说明要往下继续跳跃一次
            result++;
        }
    }
    return result;
};

console.log(jumpGameII([2, 3, 1, 1, 4]));
