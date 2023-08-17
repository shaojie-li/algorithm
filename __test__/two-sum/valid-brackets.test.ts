import { validBrackets } from "src/valid-brackets";

describe("有效的括号", () => {
    it("(())(())() 为有效的括号", () => {
        expect(validBrackets("(())(())()")).toBe(true);
    });

    it("()) 为无效的括号", () => {
        expect(validBrackets("())")).toBe(false);
    });

    it("({{[([])]}}) 为有效的括号", () => {
        expect(validBrackets("({{[([])]}})")).toBe(true);
    });

    it("[[]] 为有效的括号", () => {
        expect(validBrackets("[[]]")).toBe(true);
    });

    it("{}} 为无效的括号", () => {
        expect(validBrackets("{}}")).toBe(false);
    });
});
