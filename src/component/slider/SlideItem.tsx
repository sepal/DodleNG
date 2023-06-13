interface Props {
  active?: boolean;
  children?: React.ReactNode;
}

export const SlideItem = ({ active = false, children }: Props) => (
  <div className={active ? "" : "hidden"}>{children}</div>
);
