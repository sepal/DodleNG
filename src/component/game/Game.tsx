import Image from "next/image";
import { GamesRecord } from "@/xata";

interface GameProps {
  game: GamesRecord;
}

export const Game = ({ game }: GameProps) => {
  console.log(game);
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  return <Image src={imageUrl} alt="Level 1" width={256} height={256} />;
};
