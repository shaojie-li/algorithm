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
            } else {
                // 如果栈顶的左括号不能匹配其对应的右括号，说明为无效括号，提前退出循环，提高性能
                break;
            }
        }
    }

    // 若果存在栈中的括号能清空，说明传入的参数右有效括号
    return !stack.length;
};
