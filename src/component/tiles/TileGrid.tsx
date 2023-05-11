import { InputRow } from "./InputRow";

interface Props {
  word: string;
}

export const TileGrid = ({ word }: Props) => {
  const wordLen = word.length;
  const gridClasses = `inline-grid grid-flow-col grid-cols-${wordLen} gap-4 py-2`;

  return (
    <div className={gridClasses}>
      <InputRow />
    </div>
  );
};