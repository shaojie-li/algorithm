/**
 * 可以用贪心算法
 *
 * 多个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
 * 你需要按照以下要求，给这些孩子分发糖果：
 * 每个孩子至少分配到 1 个糖果。
 * 相邻两个孩子评分更高的孩子会获得更多的糖果。
 * 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
 */

/**
 * 题解：
 * 1. 先确定右边小孩比左边小孩得分高的情况
 * 2. 再确定左边小孩比右边小孩得分高的情况
 * 3. 为什么要左右各遍历一次呢？
 */
export const handOutCandy = function (ratings: number[]): number {
    const candies = new Array<number>(ratings.length).fill(1);

    // 从左到右遍历的情况
    for (let i = 1; i < ratings.length; i++) {
        const left = ratings[i - 1];
        const right = ratings[i];

        // 如果右边大于左边，右边的糖果数就在左边糖果数的基础上加1
        if (right > left) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // 从右到左遍历的情况
    // i = ratings.length - 2 表示倒数第二位
    for (let i = ratings.length - 2; i >= 0; i--) {
        const left = ratings[i];
        const right = ratings[i + 1];

        if (left > right) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i]);
        }
    }

    return candies.reduce<number>((a, b) => a + b, 0);
};

console.log(handOutCandy([1, 2, 2]));
