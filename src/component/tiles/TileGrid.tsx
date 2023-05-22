import { useGame } from "@/lib/gameContext";
import { InputRow } from "./InputRow";
import { Tile } from "./Tile";
import { GAME_STATE_TYPE } from "@/types/game";
import { TileRow } from "./TileRow";

interface Props {
  word: string;
}

export const TileGrid = ({ word }: Props) => {
  const wordLen = word.length;
  const gridClasses = `inline-grid gap-4 py-2`;
  const { state } = useGame();
  const { guesses } = state;

  const tiles = guesses.map((guess, i) => (
    <TileRow key={i} guess={guess} solution={word} />
  ));

  const inputRow = state.state == GAME_STATE_TYPE.PLAYING ? <InputRow /> : "";

  return (
    <div
      className={gridClasses}
      style={{
        gridTemplateColumns: `repeat(${wordLen}, minmax(0, 1fr))`,
      }}
    >
      {tiles}
      {inputRow}
    </div>
  );
};
