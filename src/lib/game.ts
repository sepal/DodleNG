import { roundToDay } from "@/utils/date";
import { GamesRecord, getXataClient } from "@/xata";

export async function fetchGame(
  timezoneOffset: number = 0
): Promise<GamesRecord> {
  if (timezoneOffset > 12) {
    timezoneOffset = 12;
  }
  const date = new Date();

  const localDate = new Date(date.getTime() - timezoneOffset);
  const epochTime = Math.floor(localDate.getTime() / 1000);
  const epochDay = roundToDay(epochTime);

  const xata = getXataClient();
  const game = await xata.db.games
    .filter({
      gameDate: {
        $le: epochDay,
      },
    })
    .sort("gameDate", "desc")
    .getFirst();

  return game as GamesRecord;
}
