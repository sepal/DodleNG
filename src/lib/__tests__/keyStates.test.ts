/**
 * @author codelity_proto@0.0.1
 * @request Create a unit test for getKeyStates, which checks if the get key states are correctly
 *   set.
 */
import { getKeyStates } from "../keyStates";
import { LETTER_TYPE } from "@/types/letter";
describe("getKeyStates", () => {
  it("should return correct key states", () => {
    const word = "apple";
    const guesses = ["aplex"];
    const expectedStates = {
      a: LETTER_TYPE.CORRECT,
      p: LETTER_TYPE.CORRECT,
      l: LETTER_TYPE.PRESENT,
      e: LETTER_TYPE.PRESENT,
      x: LETTER_TYPE.WRONG,
    };
    const result = getKeyStates(word, guesses);
    expect(result).toEqual(expectedStates);
  });
});
