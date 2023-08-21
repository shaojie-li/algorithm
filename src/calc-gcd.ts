/**
 * 求两个数的最大公约数。两个数的 最大公约数 是能够被两个数整除的最大正整数。
 * ******
 * 比如：3与21的最大公约数为3， 3
 * ******
 * 思路：辗转相除法
 *
 * 1. num1 % num2，假定除不尽
 * 2. 此时，num1 设为上一步骤的num2，num2为上一步骤 num1 与 num2 的余数
 * 3. 以此类推，直到某个阶段的 num1 % num2 为 0 为止，结果至少为 1
 */
export const calcGCD = (num1: number, num2: number) => {
    while (num2 !== 0) {
        if (num1 % num2 === 0) {
            return num2;
        }
        const temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }

    return num1;
};
