export function getRatioWithMinMax(ratio: number, min: number, max: number) {
  return min + ratio * (max - min);
}
