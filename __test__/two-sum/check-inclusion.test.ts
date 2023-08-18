import { checkInclusion } from "src/check-inclusion";

describe("字符串的排列", () => {
    it("s2: 'eidbaooo' 包含 s1: 'ab' 的排列 ", () => {
        expect(checkInclusion("ab", "eidbaooo")).toBe(true);
    });

    it("s2: 'eidboaoo' 不包含 s1: 'ab' 的排列 ", () => {
        expect(checkInclusion("ab", "eidboaoo")).toBe(false);
    });

    it("s2: 'ab' 包含 s1: 'a' 的排列 ", () => {
        expect(checkInclusion("a", "ab")).toBe(true);
    });

    it("s2: 'dcda' 包含 s1: 'adc' 的排列 ", () => {
        expect(checkInclusion("adc", "dcda")).toBe(true);
    });

    it("s2: 'bbbca' 包含 s1: 'abc' 的排列 ", () => {
        expect(checkInclusion("abc", "bbbca")).toBe(true);
    });

    it("s2: 'abc' 不包含 s1: 'bbbca' 的排列 ", () => {
        expect(checkInclusion("bbbca", "abc")).toBe(false);
    });
});
