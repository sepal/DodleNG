import { getGuessState } from "@/lib/guesses";
import { Tile } from "./Tile";
import { splitWord } from "@/utils/words";

interface Props {
  solution: string;
  guess: string;
}

export const TileRow = ({ solution, guess }: Props) => {
  const states = getGuessState(solution, guess);

  const tiles = splitWord(guess).map((letter, i) => (
    <Tile key={i} letter={letter} type={states[i]} />
  ));

  return <>{tiles}</>;
};
