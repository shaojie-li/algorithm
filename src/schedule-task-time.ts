/**
 * 给定一系列的任务，这些任务可能有依赖关系，有依赖关系须相继执行，没有依赖关系则可以同时执行。
 * 写一个函数，计算完成给定所有任务需要的时间。
 *
 * 解题思路：
 * 1. 核心就是计算出执行任务时间最长的那一组
 * 2. 需要深度优先遍历找到任务用时最长的
 * 3. 返回这组用时既可
 */

const tasks = [
    {
        name: "task1",
        time: 1,
        dependency: "",
    },
    {
        name: "task2",
        time: 2,
        dependency: "",
    },
    {
        name: "task3",
        time: 3,
        dependency: "task1",
    },
    {
        name: "task4",
        time: 3,
        dependency: "task1",
    },
    {
        name: "task5",
        time: 3,
        dependency: "task3",
    },
    {
        name: "task6",
        time: 3,
        dependency: "task3",
    },
];

type Task = (typeof tasks)[0];

export const scheduleTaskTime = (tasks: Task[]) => {
    const timeQueue: number[] = [];
    for (let i = 0; i < tasks.length; i++) {
        timeQueue[i] = tasks[i].time;
        dfs(tasks[i], tasks, timeQueue, i);
    }
    return Math.max(...timeQueue);
};

/** 找到耗时最长的那一组任务 */
function dfs(task: Task, tasks: Task[], timeQueue: number[], i: number) {
    const next = tasks.find(_task => task.dependency === _task.name);
    if (!next) return;
    timeQueue[i] += next.time;
    dfs(next, tasks, timeQueue, i);
}

console.log(scheduleTaskTime(tasks));
