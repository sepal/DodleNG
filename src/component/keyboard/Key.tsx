import { ReactNode } from "react";
import { KEY_TYPE } from "@/types/keyboard";
import { getKeyTypeColor } from "@/lib/keyStates";

interface Props {
  value: string;
  type?: KEY_TYPE;
  children?: ReactNode;
  onClick?: (value: string) => void;
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
