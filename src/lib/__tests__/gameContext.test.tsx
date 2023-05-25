import { render, fireEvent } from "@testing-library/react";
import { GameProvider } from "../gameContext";
import { InputRow } from "../../component/tiles/InputRow";
import { Key, Keyboard } from "@/component/keyboard";
import { Game } from "@/types/game";

const testGame: Game = {
  id: "1",
  word: "test",
  prompt: "test prompt",
  gameDate: 1620000000,
  levels: 1,
};

describe("GameProvider", () => {
  /**
   * @author codelity_proto@0.0.1
   * @request Create a test for the GameProvider function, that makes sure that only letters can be
   *   typed.
   */
  test("only allows letters to be typed", () => {
    const { getAllByTestId } = render(
      <GameProvider game={testGame}>
        <InputRow />
        <Keyboard />
      </GameProvider>
    );

    const inputTiles = getAllByTestId("input-tile");
    fireEvent.click(inputTiles[0]);
    fireEvent.keyDown(document, { key: "1" });
    expect(inputTiles[0].textContent).toBe("");
    fireEvent.keyDown(document, { key: "a" });
    expect(inputTiles[0].textContent).toBe("a");
  });

  /**
   * @author codelity_proto@0.0.1
   * @request Create a test for the GameProvider function, that makes sure the backspace functionality
   *   works.
   */
  test("backspace functionality works", () => {
    const { getAllByTestId } = render(
      <GameProvider game={testGame}>
        <InputRow />
        <Keyboard />
      </GameProvider>
    );

    const inputTiles = getAllByTestId("input-tile");
    fireEvent.click(inputTiles[0]);
    fireEvent.keyDown(document, { key: "a" });
    expect(inputTiles[0].textContent).toBe("a");
    fireEvent.keyDown(document, { key: "backspace" });
    expect(inputTiles[0].textContent).toBe("");
  });
});
