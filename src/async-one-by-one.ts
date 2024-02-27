/**
 * 传入多个函数，并将这些函数按顺序一个一个实行
 */

export const asyncOneByOne = (funcs: Function[]) => {
    if (!funcs.length) return;

    // 队列，先进先出
    const fn = funcs.shift();
    fn?.call(null, () => {
        asyncOneByOne(funcs);
    });
};

// function one(callback: Function) {
//     console.log("one");
//     typeof callback === "function" && callback();
// }
//
// function two(callback: Function) {
//     setTimeout(() => {
//         console.log("two");
//         typeof callback === "function" && callback();
//     }, 2000);
// }
//
// function three(callback: Function) {
//     console.log("three");
//     typeof callback === "function" && callback();
// }
