/**
 * @author codelity_proto@0.0.1
 * @request Create a test for the GameProvider function, that makes sure that only letters can be
 *   typed.
 */
import { render, fireEvent } from "@testing-library/react";
import { GameProvider } from "../gameContext";
import { InputRow } from "../../component/tiles/InputRow";

describe("GameProvider", () => {
  test("only allows letters to be typed", () => {
    const word = "test";
    const { getAllByTestId } = render(
      <GameProvider word={word}>
        <InputRow />
      </GameProvider>
    );

    const inputTiles = getAllByTestId("input-tile");
    fireEvent.click(inputTiles[0]);

    fireEvent.keyDown(document, { key: "1" });
    expect(inputTiles[0].textContent).toBe("");

    fireEvent.keyDown(document, { key: "a" });
    expect(inputTiles[0].textContent).toBe("a");
  });
});

/**
 * @author codelity_proto@0.0.1
 * @request Create a test for the GameProvider function, that makes sure the backspace functionality
 *   works.
 */
describe("GameProvider", () => {
  test("backspace functionality works", () => {
    const word = "test";
    const { getAllByTestId } = render(
      <GameProvider word={word}>
        <InputRow />
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
