import Image from "next/image";
import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";
import { TileGrid } from "../tiles";

interface GameProps {
  game: GamesRecord;
}

export const Game = ({ game }: GameProps) => {
  console.log(game);
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  if (!game.word) {
    return <div className="text-xl">"No new game"</div>;
  }

  return (
    <div className="flex items-center min-h-screen flex-col">
      <Easel imageUrl={imageUrl} />
      <TileGrid word={game.word} />
    </div>
  );
};
