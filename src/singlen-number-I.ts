/**
 * 只出现一次的数字 - 1
 *
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 *
 * 示例 1 ：
 *
 * 输入：nums = [2,2,1]
 * 输出：1
 * 示例 2 ：
 *
 * 输入：nums = [4,1,2,1,2]
 * 输出：4
 * 示例 3 ：
 *
 * 输入：nums = [1]
 * 输出：1
 *
 * 思路：异或运算，主要是利用异或中，两个相同的数字可以抵消
 * const nums = [2, 1, 1]
 * a、b、c对应数组的 num[0]、num[1]、num[2]
 * 1. ret = 0 ^ a
 * 2. ret = a ^ b，a 与 b 不相等
 * 3. ret = a ^ b ^ c，b 与 c 相等，可以相当于 ret = a ^ b ^ b，再继续相当于 ret = a，ret = 2
 */

export const singleNumberI = (nums: number[]): number => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        // 以 [2, 1, 1] 参数举例：
        // 这个地方叠加异或等于运算，平铺开来相当于：result = 0 ^ nums[0] ^ nums[1] ^ nums[2]
        // nums[1] 与 nums[2]相等；0与任何数字异或，等于数字本身；根据以上异或特性，就得出 result = nums[0]
        // 没有重复出现的数字为 2
        result ^= nums[i];
    }

    return result;
};

console.log(singleNumberI([2, 1, 1]));
