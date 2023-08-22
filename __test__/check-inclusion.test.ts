import { checkInclusion } from "src/check-inclusion";

describe("字符串的排列", function () {
    it("s2: 'eidbaooo' 包含 s1: 'ab' 的排列 ", function () {
        expect(checkInclusion("ab", "eidbaooo")).toBe(true);
    });

    it("s2: 'eidboaoo' 不包含 s1: 'ab' 的排列 ", function () {
        expect(checkInclusion("ab", "eidboaoo")).toBe(false);
    });

    it("s2: 'ab' 包含 s1: 'a' 的排列 ", function () {
        expect(checkInclusion("a", "ab")).toBe(true);
    });

    it("s2: 'dcda' 包含 s1: 'adc' 的排列 ", function () {
        expect(checkInclusion("adc", "dcda")).toBe(true);
    });

    it("s2: 'bbbca' 包含 s1: 'abc' 的排列 ", function () {
        expect(checkInclusion("abc", "bbbca")).toBe(true);
    });

    it("s2: 'abc' 不包含 s1: 'bbbca' 的排列 ", function () {
        expect(checkInclusion("bbbca", "abc")).toBe(false);
    });
});
