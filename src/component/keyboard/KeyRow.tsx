interface Props {
  children?: React.ReactNode;
}

export const KeyRow = ({ children }: Props) => (
  <div className="flex py-2">{children}</div>
);
