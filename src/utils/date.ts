export function roundToDay(epoch: number) {
  const oneDay = 86400;
  const fraction = (epoch / oneDay) | 0;

  return fraction * oneDay;
}
