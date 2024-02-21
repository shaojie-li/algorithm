/**
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。<br />
 * 如果是，返回 true ；否则，返回 false。<br />
 * 换句话说，s1 的排列之一是 s2 的 子串。<br />
 *
 * ---
 * 提示：
 * - 1 <= s1.length, s2.length <= 104
 * - s1 和 s2 仅包含小写字母
 *
 * ---
 * 思路：滑动窗口
 */
export const checkInclusion = (s1: string, s2: string) => {
    // 实现：1. 滑动窗口；2. 字母表；3. 判断s2某个滑动窗口位置的字母表是否和s1的字母表相等（字母表相等意味着两个字符串的排列相等）

    if (s1.length > s2.length) return false;

    // start 和 end 后面需要作为 substring 方法的参数，所以 end 需要为 s1.length
    // 滑动窗口开始的指针
    let start = 0;
    // 滑动窗口结束的指针
    let end = s1.length;
    // 作为英文字母索引的参考位置。
    // a的位置，即 a 的"码元"。a 到 z 是有序排列的
    const firstChartCodeAt = "a".charCodeAt(0);
    // n1 表示 s1 对应的字母表
    const n1 = new Array<number>(26).fill(0);

    // 生成s1对应的字母表，赋值给 n1
    for (let i = 0; i < s1.length; i++) {
        const n1CharIndex = s1[i].charCodeAt(0) - firstChartCodeAt;
        n1[n1CharIndex]++;
    }

    // 滑动窗口逻辑。滑动窗口的结束位置不能大于s2的长度
    while (end <= s2.length) {
        // 每次创建新的s2的滑动窗口字母表
        const n2 = new Array<number>(26).fill(0);
        // 固定长度的划动窗口
        const sliderWindow = s2.substring(start, end);
        // 根据滑动窗口 sliderWindow，生成其字母表
        for (let j = 0; j < sliderWindow.length; j++) {
            const n2CharIndex = sliderWindow[j].charCodeAt(0) - firstChartCodeAt;
            n2[n2CharIndex]++;
        }

        // 对比 n1 和 n2 的字母表，只要相等，就退出循环，返回 true。否则滑动窗口继续移动
        /**
         * 为什么字母表的对比就能确定s2包含s1的排列呢？
         * 因为字母表能体现一个字符串中，每个字符出现的次数和在字母表中的位置
         * 虽然不能对比两个字符串是否完全相等（顺序和字符相等，如："bcd" 与 "bcd" 相等 ），但是能保证s2中包含s1的排列（即包含s1的任意排列方式之一即可）
         */
        if (n1.join("") === n2.join("")) {
            return true;
        }
        start++;
        end++;
    }

    return false;
};
