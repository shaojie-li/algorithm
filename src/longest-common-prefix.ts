/**
 * 找出给定数组中的最长公共前缀
 *
 * 示例 1：
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 *
 * 示例 2：
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs: string[]) {
    if (!strs.length) return "";

    let firstStr = strs[0];
    while (true) {
        const hasCommonPrefix = strs.every(item => item.startsWith(firstStr));
        // 有公共前缀就退出循环
        if (hasCommonPrefix) break;

        // 从字符末尾往前逐个删除
        firstStr = firstStr.slice(0, firstStr.length - 1);
    }

    console.log("result", firstStr);
    return firstStr;
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
longestCommonPrefix(["cir", "car"]);
longestCommonPrefix([""]);
