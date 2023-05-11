"use client";

import { GamesRecord } from "@/xata";
import { Easel } from "./Easel";
import { TileGrid } from "../tiles";
import { onKeyPress } from "@/lib/onKeyPress";
import { useState } from "react";

interface GameProps {
  game: GamesRecord;
}

export const Game = ({ game }: GameProps) => {
  if (!game.word) {
    return <div>No game.</div>;
  }
  const word = game.word;

  const [guess, setGuess] = useState<string[]>(Array(word.length).fill(""));
  const [guessIndex, setGuessIndex] = useState<number>(0);
  const imageUrl = `/api/game/${game.id}/image/${1}`;

  if (!game.word) {
    return <div className="text-xl">"No new game"</div>;
  }

  const keyHandler = (key: string) => {
    if (key >= "a" && key <= "z" && key.length == 1) {
      if (guessIndex < word.length) {
        const newGuess = [...guess];
        newGuess[guessIndex] = key;
        setGuess(newGuess);
        setGuessIndex(guessIndex + 1);
      }
    }

    if (key == "backspace") {
      if (guessIndex > 0) {
        const newIndex = guessIndex - 1;
        const newGuess = [...guess];
        newGuess[newIndex] = "";
        setGuess(newGuess);
        setGuessIndex(newIndex);
      }
    }
  };

  onKeyPress(keyHandler);

  return (
    <div className="flex items-center min-h-screen flex-col">
      <Easel imageUrl={imageUrl} />
      <TileGrid word={game.word} guess={guess} activeInputTile={guessIndex} />
    </div>
  );
};
