import { getLetterTypeColor } from "@/lib/letters";
import { LETTER_TYPE } from "@/types/letter";

interface Props {
  letter: string;
  type?: LETTER_TYPE;
}

export const Tile = ({ letter, type = LETTER_TYPE.UNUSED }: Props) => {
  const color = getLetterTypeColor(type);
  let styling = `border ${color} inline-flex items-center justify-center bg-white text-lg rounded h-[2rem] w-[2rem] cursor-pointer`;

  return (
    <div data-testid="tile" className={styling}>
      {letter}
    </div>
  );
};
