import { InputRow } from "./InputRow";

interface Props {
  word: string;
  guess?: string[];
  activeInputTile?: number;
}

export const TileGrid = ({ word, guess = "", activeInputTile = 0 }: Props) => {
  const wordLen = word.length;
  const gridClasses = `inline-grid grid-flow-col grid-cols-${wordLen} gap-4 py-2`;

  return (
    <div className={gridClasses}>
      <InputRow
        guess={guess}
        wordLen={word.length}
        activeTile={activeInputTile}
      />
    </div>
  );
};
