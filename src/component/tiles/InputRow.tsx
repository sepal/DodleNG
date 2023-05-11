"use client";

import { useGame } from "@/lib/gameContext";
import { InputTile } from "./InputTile";

export const InputRow = () => {
  const { word, guess, guessIndex, setGuessIndex } = useGame();
  const wordLen = word.length;

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
