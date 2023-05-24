/**
 * @author codelity_proto@0.0.1
 * @request /home/sebastian/Work/projects/dodle/dodle
 */
import { render, screen } from "@testing-library/react";
import { Tile } from "../Tile";
import { LETTER_TYPE } from "@/types/letter";

describe("Tile component", () => {
  it("should have the right background color class depending on its letter type", () => {
    const letter = "A";

    const letterTypes = [
      LETTER_TYPE.WRONG,
      LETTER_TYPE.CORRECT,
      LETTER_TYPE.PRESENT,
      LETTER_TYPE.UNUSED,
    ];

    const expectedClasses = [
      "bg-slate-400 text-white",
      "bg-green-700 text-white",
      "bg-yellow-200",
      "bg-white",
    ];

    letterTypes.forEach((type, index) => {
      render(<Tile letter={letter} type={type} />);
      const tile = screen.getByTestId("tile");
      expect(tile).toHaveClass(expectedClasses[index]);
    });
  });
});
