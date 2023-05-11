"use client";

interface Props {
  letter?: string;
  onClick?(): void;
  active?: boolean;
}

export const InputTile = ({
  letter = " ",
  onClick: onSelect = () => {},
  active = false,
}: Props) => {
  let styling =
    "border inline-flex items-center justify-center bg-white text-lg rounded h-[2rem] w-[2rem] cursor-pointer";

  if (active) {
    styling += " border-blue-500";
  } else {
    styling += " border-gray-500";
  }

  return (
    <div onClick={onSelect} className={styling}>
      {letter}
    </div>
  );
};
