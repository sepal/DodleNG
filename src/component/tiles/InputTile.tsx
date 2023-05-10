interface Props {
  letter?: string;
}

export const InputTile = ({ letter = " " }: Props) => (
  <div className="border border-gray-500 inline-flex items-center justify-center bg-white text-lg font-semibold rounded h-[2rem] w-[2rem]">
    {letter}
  </div>
);
