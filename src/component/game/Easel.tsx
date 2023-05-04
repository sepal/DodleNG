import Image from "next/image";

interface EaselBackground {
  imageUrl: string;
}

interface EaselProps {
  imageUrl: string;
}

export const Easel = ({ imageUrl }: EaselProps) => (
  <div className="relative w-full h-full">
    <div className="items-center justify-center">
      <Image
        src="/easel.png"
        alt="Easel"
        className="easel"
        width="512"
        height="512"
      />
      <div className="absolute inset-0 top-[106px] left-[106px]">
        <Image
          src={imageUrl}
          alt="Painting"
          className="picture"
          width="300"
          height="300"
        />
      </div>
    </div>
  </div>
);
