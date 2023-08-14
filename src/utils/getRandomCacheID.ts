export const getRandomCacheID = (cacheName: string): string => {
    let pageNumOnCache = Math.floor(Math.random() * 100000);
    return cacheName + pageNumOnCache;
}