import { fetchGame } from "@/lib/game";
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

  const game = await fetchGame(timezoneOffset);

  if (!game) {
    return new Response("No game found.", {
      status: 404,
    });
  }
  return NextResponse.json(game);
}
