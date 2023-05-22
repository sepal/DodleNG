import { ReactNode } from "react";
import { LETTER_TYPE } from "@/types/letter";
import { getLetterTypeColor } from "@/lib/keyStates";

interface Props {
  value: string;
  type?: LETTER_TYPE;
  children?: ReactNode;
  onClick?: (value: string) => void;
}

export const Key = ({
  value,
  type = LETTER_TYPE.UNUSED,
  children,
  onClick = (value: string) => {},
}: Props) => {
  const colors = getLetterTypeColor(type);
  const classNames = `border ${colors} active:shadow-inner rounded px-2 min-w-6 h-10 mx-2`;
  return (
    <button
      data-testid="key"
      onClick={(event) => {
        onClick(value);
      }}
      className={classNames}
    >
      {children}
    </button>
  );
};
