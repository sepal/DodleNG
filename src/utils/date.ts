export function getCurrentEpoch(date = new Date()) {
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60 * 1000
  );
  const epochTime = Math.floor(localDate.getTime() / 1000);
  return epochTime;
}
