import { ReactNode } from "react";
import { KEY_TYPE } from "@/types/keyboard";

interface Props {
  value: string;
  type?: KEY_TYPE;
  children?: ReactNode;
  onClick?: (value: string) => void;
}

function getKeyTypeColor(keyType: KEY_TYPE) {
  switch (keyType) {
    case KEY_TYPE.WRONG:
      return "bg-slate-400 text-white";
    case KEY_TYPE.CORRECT:
      return "bg-green-700 text-white";
    case KEY_TYPE.PRESENT:
      return "bg-yellow-200";
    default:
      return "bg-white";
  }
}

export const Key = ({
  value,
  type = KEY_TYPE.UNUSED,
  children,
  onClick = (value: string) => {},
}: Props) => {
  const colors = getKeyTypeColor(type);
  const classNames = `border ${colors} active:shadow-inner rounded px-2 min-w-6 h-10 mx-2`;
  return (
    <button
      onClick={(event) => {
        onClick(value);
      }}
      className={classNames}
    >
      {children}
    </button>
  );
};
