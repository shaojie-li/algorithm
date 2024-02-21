/**
 * 无重复字符的最长子串
 * ******
 *
 * 给定一个字符串 `s` ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 思路：滑动窗口
 */
export const lengthOfLongestSubstring = (s: string): number => {
    let start = 0;
    let end = 1;
    let str = "";
    let maxStrLength = 0;

    while (end <= s.length) {
        str = s.substring(start, end);
        // 如果末尾的指针处的值包含在滑动窗口中，说明有重复的值，将滑动窗口向后移动，末尾的指针重置到开始指针的后一位
        if (str.includes(s[end])) {
            start++;
            end = start + 1;
        } else {
            // 如果不包含，则末尾指针继续向后移动
            end++;
        }
        // 通过迭代，找到最大长度的不重复子串
        maxStrLength = Math.max(maxStrLength, str.length);
    }

    return maxStrLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
