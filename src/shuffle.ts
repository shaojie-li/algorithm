/**
 * Fisher–Yates shuffle 洗牌算法
 */

export function fisherYatesShuffle(input: number[]) {
    if (!input?.length) return;

    for (let i = input.length - 1; i >= 0; i--) {
        // 生成 0到i 的随机数字下标
        let randomIndex = Math.floor(Math.random() * (i + 1));
        // 交换位置
        [input[i], input[randomIndex]] = [input[randomIndex], input[i]];
    }

    return input;
}
