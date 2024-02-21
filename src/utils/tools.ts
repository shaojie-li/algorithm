/**
 * 判断是否为空，即是否为null或undefined
 * @param val
 * @returns boolean
 */
export const isEmpty = <T = any>(val: T): boolean => {
    return val === null || val === undefined;
};
