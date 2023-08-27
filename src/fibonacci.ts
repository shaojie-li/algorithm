/**
 * 求斐波那契的第N个值
 *
 * 思路：动态规划
 */
export const fibonacci = (n: number) => {
    if (n < 2) return n;
    const fibArr = [0, 1];

    for (let i = 2; i <= n; i++) {
        // 举例：n = 5：
        // 0. fibArr[2] = fibArr[0] + fibArr[1] -> 1
        // 1. fibArr[3] = fibArr[1] + fibArr[2] -> 2
        // 2. fibArr[4] = fibArr[2] + fibArr[3] -> 3
        // 3. fibArr[5] = fibArr[2] + fibArr[3] -> 5
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }

    return fibArr[n];
};
