/**
 * 只出现一次的数字 - 2
 *
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 *
 * 你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
 *
 * 示例 1：
 *
 * 输入：nums = [2,2,3,2]
 * 输出：3
 * 示例 2：
 *
 * 输入：nums = [0,1,0,1,0,1,99]
 * 输出：99
 *
 * 思路：1. 哈希表算法；2. 二进制（TODO）
 */

/** 哈希表算法 */
export const singleNumberII = (nums: number[]): number => {
    const cache = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const preCnt = cache.get(nums[i]) || 0;
        cache.set(nums[i], preCnt + 1);
    }

    let result = 0;
    for (const [key, val] of cache) {
        console.log(key, val);
        if (cache.get(key) === 1) {
            result = key;
        }
    }

    return result;
};

console.log(singleNumberII([2, 1, 1, 1]));
