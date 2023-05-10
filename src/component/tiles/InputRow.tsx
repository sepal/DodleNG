"use client";

import { useState } from "react";
import { InputTile } from "./InputTile";

interface Props {
  wordLen: number;
  defaultActiveTile?: number;
}

export const InputRow = ({ wordLen, defaultActiveTile = undefined }: Props) => {
  const [activeTile, setActiveTile] = useState<number | undefined>(
    defaultActiveTile
  );

  const inputTiles = Array(wordLen)
    .fill(null)
    .map((v, i) => {
      return (
        <InputTile
          onClick={() => {
            setActiveTile(i);
          }}
          key={i}
          active={activeTile == i}
        />
      );
    });

  return <>{inputTiles}</>;
};
