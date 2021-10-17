/**
 * Returns {n} random items from the passed array.
 * @param array source array.
 * @param n Number of items to take.
 */
export function getRandomItems<T>(array: Array<T>, n: number) {
  return array.sort(() => Math.random() - Math.random()).slice(0, n);
}
