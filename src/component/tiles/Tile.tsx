interface Props {
  letter: string;
}

export const Tile = ({ letter }: Props) => {
  let styling =
    "border inline-flex items-center justify-center bg-white text-lg rounded h-[2rem] w-[2rem] cursor-pointer";

  return (
    <div data-testid="tile" className={styling}>
      {letter}
    </div>
  );
};
