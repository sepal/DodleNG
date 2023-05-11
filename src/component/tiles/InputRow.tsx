"use client";

import { useState } from "react";
import { InputTile } from "./InputTile";

interface Props {
  wordLen: number;
  guess?: string[];
  activeTile?: number;
}

export const InputRow = ({ wordLen, guess = [], activeTile = 0 }: Props) => {
  // const [activeTile, setActiveTile] = useState<number | undefined>(
  //   defaultActiveTile
  // );

  const inputTiles = Array(wordLen)
    .fill(null)
    .map((v, i) => {
      return (
        <InputTile
          // onClick={() => {
          //   setActiveTile(activeTile);
          // }}
          key={i}
          active={activeTile == i}
          letter={guess[i]}
        />
      );
    });

  return <>{inputTiles}</>;
};
