/**
 * 有效的括号
 * - 思路：利用栈先进后出的特性
 */
export const validBrackets = (brackets: string) => {
    if (!brackets || brackets.length % 2 !== 0) return false;

    // 定义左右括号，左括号对应相应的右括号
    const bracketsMap = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ]);
    // 定义队列
    const stack: string[] = [];

    // 遍历每个括号
    for (let i = 0; i < brackets.length; i++) {
        const bracket = brackets[i];
        // 将左括号放入队列中
        if (bracketsMap.has(bracket)) {
            // 进入左括号判断
            stack.push(bracket);
        } else {
            // 进入右括号判断
            // 栈顶元素
            const stackTop = stack[stack.length - 1];
            // 如果左括号能匹配到对应的右括号，则将左括号从栈中删除
            if (bracketsMap.get(stackTop) === bracket) {
                stack.pop();
            }
        }
    }

    return !stack.length;
};
