// Simulate fetching external data, which can be slow
function fetchExternalData(id) {
  console.log(`Fetching data for ID: ${id}`);
  const data = `Data for ID: ${id}`; // Simulated data
  return data;
}
// Create a Map for caching
const cache = new Map();
function getCachedData(id) {
  // Check if data is already in the cache
  if (cache.has(id)) {
    return cache.get(id); // return cached value, no expensive lookup
  }
  // If not in cache, fetch "external" data and store in cache for next time
  const data = fetchExternalData(id);
  cache.set(id, data);
  return data;
}
// Example usage
console.log("#1: " + getCachedData(1)); // First time: fetches "external" data and caches result
console.log("#2: " + getCachedData(1)); // Other times: can fetch result from cache, much faster
