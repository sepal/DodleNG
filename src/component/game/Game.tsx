"use client";

import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";
import { TileGrid } from "../tiles";
import { GameProvider } from "@/lib/gameContext";
import { StateMessage } from "./StateMessage";

interface GameProps {
  game: GamesRecord;
}

export const Game = ({ game }: GameProps) => {
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  if (!game.word || !game.prompt) {
    return <div className="text-xl">"No new game"</div>;
  }

  return (
    <GameProvider word={game.word} prompt={game.prompt}>
      <div className="flex items-center min-h-screen flex-col">
        <Easel imageUrl={imageUrl} />
        <TileGrid word={game.word} />
        <StateMessage />
      </div>
    </GameProvider>
  );
};
