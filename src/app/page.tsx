import Image from "next/image";
import { Inter } from "next/font/google";
import { cookies } from "next/dist/client/components/headers";
import { fetchGame } from "@/lib/game";
import { GameContainer } from "@/component/game";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const cookieStore = cookies();
  let timezoneOffset = cookieStore.get("timezone") ?? 0;
  timezoneOffset = parseInt(timezoneOffset.toString());

  const game = fetchGame(timezoneOffset);

  if (!game) {
    throw new Error("Failed to fetch game");
  }

  return game;
}

export default async function Home() {
  const game = await getData();

  return (
    <main>
      <h1 className="text-4xl">Dodle</h1>
      <GameContainer game={game} />
    </main>
  );
}
