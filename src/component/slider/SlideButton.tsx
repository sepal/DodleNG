interface Props {
  label: string;
  onClick?: () => void;
}

export const SlideButton = ({ label, onClick = () => {} }: Props) => (
  <button className="relative z-20" onClick={onClick}>
    {label}
  </button>
);
