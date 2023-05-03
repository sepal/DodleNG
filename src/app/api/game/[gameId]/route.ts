import { getXataClient } from "@/xata";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      gameId: string;
    };
  }
) {
  const xata = getXataClient();

  const { gameId } = params;

  const game = await xata.db.games.read(gameId);
  let images = await xata.db.images
    .filter({
      game: game,
    })
    .getAll({
      columns: ["id", "key", "score", "level"],
    });

  const result = { ...game, ...{ images: images } };
  return NextResponse.json(result);
}
