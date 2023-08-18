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
    if (s1.length > s2.length) return false;

    // 滑动窗口开始的指针
    let start = 0;
    // 滑动窗口结束的指针
    let end = s1.length;
    // 作为英文字母索引的参考位置
    const firstChartCodeAt = "a".charCodeAt(0);
    // n1 表示 s1 对应的字母表
    const n1 = new Array<number>(26).fill(0);

    // 生成s1对应的字母表，赋值给 n1
    for (let i = 0; i < s1.length; i++) {
        const n1CharIndex = s1[i].charCodeAt(0) - firstChartCodeAt;
        n1[n1CharIndex]++;
    }

    // 滑动窗口逻辑
    while (end <= s2.length) {
        const n2 = new Array<number>(26).fill(0);
        // 固定长度的划定窗口
        const sliderWindow = s2.substring(start, end);
        // 根据滑动窗口 sliderWindow，生成其字母表
        for (let j = 0; j < sliderWindow.length; j++) {
            const n2CharIndex = sliderWindow[j].charCodeAt(0) - firstChartCodeAt;
            n2[n2CharIndex]++;
        }

        // 对比 n1 和 n2 的字母表，只要相等，就退出循环，返回 true。否则滑动窗口继续移动
        if (n1.join("") === n2.join("")) {
            return true;
        }
        start++;
        end++;
    }

    return false;
};
