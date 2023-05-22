/**
 * @author codelity_proto@0.0.1
 * @request Create a test for InputRow that makes sure you can switch between
 *   several InputTiles.
 */
import { render, fireEvent } from "@testing-library/react";
import { GameProvider } from "../../../lib/gameContext";
import { InputRow } from "../InputRow";

describe("InputRow", () => {
  test("can switch between several InputTiles", () => {
    const word = "test";
    const { getAllByTestId } = render(
      <GameProvider word={word} prompt={word}>
        <InputRow />
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
