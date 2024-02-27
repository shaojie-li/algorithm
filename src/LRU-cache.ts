/**
 * 最近最少使用 缓存
 */

class LRUCache {
    cache = new Map<number, number>();
    private readonly capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            // get一次也表示使用过，需要使其保持新鲜
            const value = this.cache.get(key)!;
            this.cache.delete(key);
            this.cache.set(key, value);

            return value;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            // 缓存中存在，先更新再说
            this.cache.set(key, value);
        }

        // 如果超出容器最大值，将最近最少使用的删除
        if (this.cache.size === this.capacity) {
            // Map实例中的第一个键
            const firstKeyInMap: number = this.cache.keys().next().value;
            // 删除map中的第一个
            this.cache.delete(firstKeyInMap);
        }

        // 此时cache里的容量肯定是小于最大容量限制的，不存在key的情况下，直接新增
        !this.cache.has(key) && this.cache.set(key, value);
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 1); // 缓存是 {2=1}
lRUCache.put(1, 1); // 缓存是 {2=1, 1=1}
lRUCache.put(2, 3); // 缓存是 {1=1, 2=3}
lRUCache.put(4, 1); //缓存是 {2=3, 4=4}
lRUCache.get(1); // 返回 -1，缓存是 {2=3, 4=4}
lRUCache.get(2); // 返回 3， 缓存是 {4=4, 2=3}
