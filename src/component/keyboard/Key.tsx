import { ReactNode } from "react";

interface Props {
  value: string;
  children?: ReactNode;
  onClick?: (value: string) => void;
}

export const Key = ({
  value,
  children,
  onClick = (value: string) => {},
}: Props) => (
  <button
    onClick={(event) => {
      onClick(value);
    }}
    className="border rounded px-2 min-w-6 h-10 mx-2"
  >
    {children}
  </button>
);
