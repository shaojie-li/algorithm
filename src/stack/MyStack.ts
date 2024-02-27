/**
 * 用队列来实现栈
 *
 * 仅使用两个队列实现一个后进先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 */

class MyStack {
    queue: number[] = [];

    push(x: number): void {
        this.queue.unshift(x);
    }

    pop(): number {
        return this.queue.shift()!;
    }

    top(): number {
        return this.queue[0];
    }

    empty(): boolean {
        return !this.queue.length;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.top()); // 返回 3
console.log(myStack.pop()); // 返回 3
console.log(myStack.empty()); // 返回 False
console.log(myStack.queue); // 返回 [2, 1]
