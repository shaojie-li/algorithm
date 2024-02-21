import { lengthOfLongestSubstring } from "../src/length-of-longest-substring";

describe("获取一个字符串中，不含有重复字符的最长子串长度", function () {
    it("pwwkew 不含有重复字符的长度为3，即 wke", function () {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    });

    it("abccddeaf 不含有重复字符的长度为4，即 deaf", function () {
        expect(lengthOfLongestSubstring("abccddeaf")).toEqual(4);
    });
});
