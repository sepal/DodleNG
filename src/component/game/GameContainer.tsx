"use client";

import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";
import { TileGrid } from "../tiles";
import { GameProvider } from "@/lib/gameContext";
import { StateMessage } from "./StateMessage";
import { Keyboard } from "../keyboard";
import { Game } from "@/types/game";
import { EaselContainer } from "./EaselSlider";

interface GameProps {
  game: Game;
}

export const GameContainer = ({ game }: GameProps) => {
  if (!game.word || !game.prompt) {
    return <div className="text-xl">"No new game"</div>;
  }

  return (
    <GameProvider game={game}>
      <div className="flex items-center min-h-screen flex-col">
        <EaselContainer />
        <TileGrid word={game.word} />
        <StateMessage />
        <Keyboard />
      </div>
    </GameProvider>
  );
};
