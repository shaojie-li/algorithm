/**
 * 判断是否为回文
 *
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1：
 * 输入：x = 121
 * 输出：true
 *
 * 示例 2：
 * 输入：x = -121
 * 输出：false
 * 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 示例 3：
 * 输入：x = 10
 * 输出：false
 * 解释：从右向左读, 为 01 。因此它不是一个回文数。
 */

/**
 * 转换成字符串去反，然后对比
 */
export function isPalindromeStr(x: number): boolean {
    const strX = String(x);
    if (!strX) return false;

    return strX === strX.split("").reverse().join("");
}

export function isPalindromeNum(x: number): boolean {
    if (x < 0) return false;
    const originalValue = x;
    let reverseValue = 0;
    while (x !== 0) {
        // 分析：232，第一次循环
        // 1. 参数x对10取模，取模可以得到其末尾的数
        // reverseValue每次结果为：2, 2*10 + 3, 23 * 100 + 2
        reverseValue = reverseValue * 10 + (x % 10);
        // 2. 为了继续得到下一次的取模的值（下一次末尾的值），也就是2前面的3
        // 就得把 232 变成 23，所以用x除以10，并赋值给x，然后取整，进入下一个循环
        // 3. 如果x的值等于0，说明已经除到个数位了，不必往下继续，退出循环
        x = parseInt(String(x / 10));
    }
    return reverseValue === originalValue;
}

console.log(isPalindromeNum(1231));
