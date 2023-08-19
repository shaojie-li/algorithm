/**
 * 利用数据类型 "树" 来进行深拷贝的实现
 */
export const deepClone = <T = any>(target: T): T => {
    // 如果是基本数据类型，则直接返回
    if (
        typeof target === "number" ||
        typeof target === "string" ||
        typeof target === "boolean" ||
        target === null ||
        target === undefined
    ) {
        return target;
    }

    const root = {} as any;
    // 栈
    const stack = [{ parent: root, key: undefined as string | undefined, data: target }];

    while (stack.length) {
        const node = stack.pop();
        const { parent, key, data } = node!;

        let result = parent;
        if (typeof key !== "undefined") {
            result = (parent[key] as any) = {} as any;
        }

        for (const k in data) {
            if ((data as any).hasOwnProperty(k)) {
                if (data[k] instanceof RegExp) {
                    (result[k] as RegExp) = new RegExp(data[k] as unknown as RegExp);
                    continue;
                }
                if (data[k] instanceof Date) {
                    (result[k] as Date) = new Date(data[k] as unknown as Date);
                    continue;
                }

                if (typeof data[k] === "object") {
                    stack.push({
                        parent: result,
                        key: k,
                        data: data[k] as any,
                    });
                } else {
                    // @ts-ignore
                    (result[k] as any) = data[k];
                }
            }
        }
    }

    return root;
};
