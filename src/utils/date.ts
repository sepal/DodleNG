export function getCurrentEpoch(date = new Date()) {
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );
  const epochTime = Math.floor(localDate.getTime() / 1000);
  return epochTime;
}

export function roundToDay(epoch: number) {
  const oneDay = 86400;
  const fraction = (epoch / oneDay) | 0;
  console.log(fraction);

  return fraction * oneDay;
}
