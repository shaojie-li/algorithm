import { TreeNode } from "src/utils/TreeNode";

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
        if (str.includes(s[end])) {
            start++;
            end = start + 1;
        } else {
            end++;
        }
        maxStrLength = Math.max(maxStrLength, str.length);
    }

    return maxStrLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
