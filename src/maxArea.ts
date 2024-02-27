/**
 * 盛最多水的容器
 *
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 *
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 返回容器可以储存的最大水量。
 *
 * ![示例1](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)
 *
 * 输入：[1,8,6,2,5,4,8,3,7]
 * 输出：49
 * 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
 */

/**
 * 暴力解法。考虑了各种情况，会有重复的面积计算
 */
export const maxArea1 = (height: number[]): number => {
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const width = j - i;
            // 水位受限于最小高度 Math.min(height[i], height[j])
            result = Math.max(result, Math.min(height[i], height[j]) * width);
        }
    }

    return result;
};

/**
 * 双指针，可以减少重复的面积计算
 */
export const maxArea2 = (height: number[]): number => {
    let result = 0;
    // 左指针
    let l = 0;
    // 右指针
    let r = height.length - 1;

    while (l < r) {
        // 宽度
        const w = r - l;
        const lH = height[l];
        const rH = height[r];

        // 面积的大小受限于较小的高度
        result = Math.max(result, w * Math.min(lH, rH));

        // 移动较小的指针，以寻求更大面积的可能
        if (lH > rH) {
            r--;
        } else {
            l++;
        }
    }

    return result;
};

console.log("暴力解法", maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("双指针解法", maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
