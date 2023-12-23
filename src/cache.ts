import NodeCache from 'node-cache';
const cacheOptions = {
    stdTTL: 100, // Default time to live for each entry (seconds)
    checkperiod: 120 // Period to check for expired entries (seconds)
};
console.info('Cache options: ', cacheOptions, '\nCache is ready to use.');
export const cache = new NodeCache(cacheOptions);