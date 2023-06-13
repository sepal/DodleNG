import { Children, useState } from "react";
import { SlideItem } from "./SlideItem";
import { SlideButton } from "./SlideButton";

interface Props {
  defaultActive?: number;
  children?: React.ReactNode;
}

export const Slider = ({ defaultActive = 0, children }: Props) => {
  const [active, setActive] = useState(defaultActive);
  console.log(defaultActive);

  const slides = Children.map(children, (child, index) => (
    <SlideItem key={index} active={index == active}>
      {child}
    </SlideItem>
  ));

  const handleNext = () => {
    if (active < Children.count(children) - 1) {
      console.log(active);
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      const newActive = active - 1;
      setActive(newActive);
    }
  };

  return (
    <div className="flex relative w-full h-full overflow-hidden">
      <SlideButton label="prev" onClick={handlePrev} />
      {slides}
      <SlideButton label="next" onClick={handleNext} />
    </div>
  );
};
