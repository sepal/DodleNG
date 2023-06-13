import Image from "next/image";
import { Easel } from "./Easel";
import { useGame } from "@/lib/gameContext";
import { Slider } from "../slider";

export const EaselContainer = () => {
  const { state } = useGame();
  const { game, guesses } = state;
  const imageNumber =
    guesses.length + 1 > game.levels ? game.levels : guesses.length + 1;
  const currentImages = `/api/game/${game.id}/image/${imageNumber}`;

  const imageUrls = Array.from(
    { length: guesses.length + 1 },
    (v, i) => `/api/game/${game.id}/image/${i + 1}`
  );

  const images = imageUrls.map((url) => (
    <Image
      src={url}
      alt="Painting"
      className="picture"
      width="300"
      height="300"
    />
  ));

  return (
    <div className="flex flex-row relative">
      <Slider defaultActive={guesses.length}>{images}</Slider>
    </div>
  );
};
