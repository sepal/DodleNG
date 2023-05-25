import { render, fireEvent } from "@testing-library/react";
import { GameProvider } from "../../../lib/gameContext";
import { InputRow } from "../InputRow";
import { Keyboard } from "@/component/keyboard";
import { Game } from "@/types/game";

/**
 * @author codelity_proto@0.0.1
 * @request Create a test for InputRow that makes sure you can switch between
 *   several InputTiles.
 */
describe("InputRow", () => {
  test("can switch between several InputTiles", () => {
    const game: Game = {
      id: "1",
      word: "test",
      prompt: "test",
      gameDate: 1620000000,
      levels: 1,
    };

    const { getAllByTestId } = render(
      <GameProvider game={game}>
        <InputRow />
        <Keyboard />
      </GameProvider>
    );

    const inputTiles = getAllByTestId("input-tile");
    fireEvent.click(inputTiles[0]);
    fireEvent.keyDown(document, { key: "a" });
    expect(inputTiles[0].textContent).toBe("a");

    fireEvent.click(inputTiles[1]);
    fireEvent.keyDown(document, { key: "b" });
    expect(inputTiles[1].textContent).toBe("b");

    fireEvent.click(inputTiles[0]);
    fireEvent.keyDown(document, { key: "c" });
    expect(inputTiles[0].textContent).toBe("c");
  });
});
