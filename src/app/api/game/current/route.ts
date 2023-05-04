import { roundToDay } from "@/utils/date";
import { getXataClient } from "@/xata";
import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      current: number;
    };
  }
) {
  const cookieStore = cookies();
  let timezoneOffset = cookieStore.get("timezone") ?? 0;

  timezoneOffset = parseInt(timezoneOffset.toString());

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

  if (!game) {
    return new Response("No game found.", {
      status: 404,
    });
  }
  return NextResponse.json(game);
}
