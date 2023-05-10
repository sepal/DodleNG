import { InputTile } from "./InputTile";

interface Props {
  wordLen: number;
}

export const InputRow = ({ wordLen }: Props) => {
  const inputTiles = Array(wordLen)
    .fill(null)
    .map((v, i) => {
      return <InputTile key={i} />;
    });

  return <>{inputTiles}</>;
};
