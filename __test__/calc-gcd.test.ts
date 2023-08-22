import { calcGCD } from "src/calc-gcd";

describe("求两个数的最大公约数", () => {
    it("3 与 21 的最大公约数为 3", function () {
        expect(calcGCD(3, 21)).toEqual(3);
    });

    it("21 与 3 的最大公约数为 3", function () {
        expect(calcGCD(21, 3)).toEqual(3);
    });

    it("319 与 377 的最大公约数为 29", function () {
        expect(calcGCD(319, 377)).toEqual(29);
    });

    it("377 与 319 的最大公约数为 29", function () {
        expect(calcGCD(319, 377)).toEqual(29);
    });
});
