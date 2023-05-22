/**
 * @author codelity_proto@0.0.1
 * @request Create a unit test for getKeyStates, which checks if the get key states are correctly
 *   set.
 */
import { getKeyStates } from "../keyStates";
import { KEY_TYPE } from "@/types/keyboard";
describe("getKeyStates", () => {
  it("should return correct key states", () => {
    const word = "apple";
    const guesses = ["aplex"];
    const expectedStates = {
      a: KEY_TYPE.CORRECT,
      p: KEY_TYPE.CORRECT,
      l: KEY_TYPE.PRESENT,
      e: KEY_TYPE.PRESENT,
      x: KEY_TYPE.WRONG,
    };
    const result = getKeyStates(word, guesses);
    expect(result).toEqual(expectedStates);
  });
});
