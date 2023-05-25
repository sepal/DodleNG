import { Game } from "@/types/game";
import { roundToDay } from "@/utils/date";
import { GamesRecord, getXataClient } from "@/xata";

export async function fetchGame(timezoneOffset: number = 0): Promise<Game> {
  if (timezoneOffset > 12) {
    timezoneOffset = 12;
  }
  const date = new Date();

  const localDate = new Date(date.getTime() - timezoneOffset);
  const epochTime = Math.floor(localDate.getTime() / 1000);
  const epochDay = roundToDay(epochTime);

  const xata = getXataClient();
  const gameRecord: GamesRecord = (await xata.db.games
    .filter({
      gameDate: {
        $le: epochDay,
      },
    })
    .sort("gameDate", "desc")
    .getFirst()) as GamesRecord;

  const images = await xata.db.images
    .filter("game.id", "1")
    .select(["id"])
    .getAll();

  if (!gameRecord.word || !gameRecord.prompt || !gameRecord.gameDate) {
    throw "Uncomplete game records";
  }

  const game: Game = {
    id: gameRecord.id,
    word: gameRecord.word,
    prompt: gameRecord.prompt,
    gameDate: gameRecord.gameDate,
    levels: images.length,
  };

  return game;
}
