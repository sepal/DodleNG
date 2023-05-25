"use client";

import { useGame } from "@/lib/gameContext";
import { InputTile } from "./InputTile";

export const InputRow = () => {
  const { state, setGuessIndex } = useGame();
  const { game, guess, guessIndex } = state;
  const wordLen = game.word.length;

  const inputTiles = Array(wordLen)
    .fill(null)
    .map((v, i) => {
      return (
        <InputTile
          onClick={() => {
            setGuessIndex(i);
          }}
          key={i}
          active={guessIndex == i}
          letter={guess[i]}
        />
      );
    });

  return <>{inputTiles}</>;
};
