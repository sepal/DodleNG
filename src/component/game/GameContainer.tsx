"use client";

import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";
import { TileGrid } from "../tiles";
import { GameProvider } from "@/lib/gameContext";
import { StateMessage } from "./StateMessage";
import { Keyboard } from "../keyboard";
import { Game } from "@/types/game";

interface GameProps {
  game: Game;
}

export const GameContainer = ({ game }: GameProps) => {
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  if (!game.word || !game.prompt) {
    return <div className="text-xl">"No new game"</div>;
  }

  return (
    <GameProvider game={game}>
      <div className="flex items-center min-h-screen flex-col">
        <Easel imageUrl={imageUrl} />
        <TileGrid word={game.word} />
        <StateMessage />
        <Keyboard />
      </div>
    </GameProvider>
  );
};
