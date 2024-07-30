export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const apiCalls = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, apiCalls);

  if (apiCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}
