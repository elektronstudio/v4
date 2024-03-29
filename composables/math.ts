export function random(min: number = 0, max: number = 1): number {
  return min + Math.random() * (max - min);
}

export function randomInt(min: number, max: number): number {
  return Math.floor(random(min, max));
}

export function remap(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
): number {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

export const average = (arr: number[]) =>
  Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
