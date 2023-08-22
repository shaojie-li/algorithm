import { deepClone } from "src/deep-clone";

describe("根据树实现深拷贝", function () {
    it("通过深度拷贝，使 obj 不等于 deepClone(obj)", function () {
        const obj = { a: 1, b: 2, c: { c1: 3, c2: 4, c3: { "c3-1": 5 } } };
        expect(deepClone(obj)).not.toBe(obj);
    });

    it("基本数据类型对比，根据值对比", function () {
        expect(deepClone(1)).not.toEqual(2);
        expect(deepClone(2)).toEqual(2);
        expect(deepClone("2")).toEqual("2");
        expect(deepClone("1")).not.toEqual("2");
        expect(deepClone(true)).not.toEqual(false);
        expect(deepClone(false)).toEqual(false);
        expect(deepClone(null)).toEqual(null);
        expect(deepClone(undefined)).toEqual(undefined);
    });

    it("对象中有正则的情况", function () {
        const obj = { reg: /\w+/ };
        expect(deepClone(obj)).toStrictEqual(obj);
    });

    it("对象中有日期对象", function () {
        const obj = { date: new Date("2023-10-10") };
        expect(deepClone(obj)).toStrictEqual(obj);
    });

    it("对象中有函数", function () {
        const fn = function () {
            console.log(123);
        };
        const obj = {
            fn: function () {
                console.log(123);
            },
        };
        expect(deepClone(obj)).toStrictEqual(obj);
    });
});
