/**
 * @author codelity_proto@0.0.1
 * @request Create a unit test for getGuessState, for which word apple is passed, and the guesses
 *   aplex and apple. for aplex the states should be a=correct, p=correct, l=present, l=present,
 *   x=wrong. For the second guess apple the all letters should be correct
 */
import { getGuessState } from "../guesses";
import { LETTER_TYPE } from "@/types/letter";
import { getKeyStates } from "../keyStates";

describe("getGuessState", () => {
  it("should return correct guess states for given word and guesses", () => {
    const word = "apple";
    const guesses = ["aplex", "apple"];
    const expectedStates = [
      [
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.PRESENT,
        LETTER_TYPE.PRESENT,
        LETTER_TYPE.WRONG,
      ],
      [
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.CORRECT,
        LETTER_TYPE.CORRECT,
      ],
    ];

    guesses.forEach((guess, index) => {
      const result = getGuessState(word, guess);
      expect(result).toEqual(expectedStates[index]);
    });
  });
});
