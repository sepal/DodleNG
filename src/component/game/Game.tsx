import Image from "next/image";
import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";

interface GameProps {
  game: GamesRecord;
}

export const Game = ({ game }: GameProps) => {
  console.log(game);
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  return <Easel imageUrl={imageUrl} />;
};
