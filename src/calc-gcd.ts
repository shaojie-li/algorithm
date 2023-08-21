/**
 * 求两个数的最大公约数。两个数的 最大公约数 是能够被两个数整除的最大正整数。
 * ******
 * 比如：3与21的最大公约数为3， 3
 * ******
 * 思路：辗转相除法
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
