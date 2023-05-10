import Image from "next/image";

interface EaselBackground {
  imageUrl: string;
}

interface EaselProps {
  imageUrl: string;
}

export const Easel = ({ imageUrl }: EaselProps) => (
  <div className="relative py-2">
    <Image
      src="/easel.png"
      alt="Easel"
      className="easel"
      width="512"
      height="512"
    />
    <div className="absolute inset-0 top-[114px] left-[106px]">
      <Image
        src={imageUrl}
        alt="Painting"
        className="picture"
        width="300"
        height="300"
      />
    </div>
  </div>
);
