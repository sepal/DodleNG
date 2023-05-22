/**
 * @author codelity_proto@0.0.1
 * @request /home/sebastian/Work/projects/dodle/dodle
 */
import { splitWord } from "../words";

describe("splitWord", () => {
  test("should split a word into an array of characters", () => {
    const word = "hello";
    const expectedResult = ["h", "e", "l", "l", "o"];
    expect(splitWord(word)).toEqual(expectedResult);
  });

  test("should handle empty strings", () => {
    const word = "";
    const expectedResult = [];
    expect(splitWord(word)).toEqual(expectedResult);
  });
});
