/**
 * @author codelity_proto@0.0.1
 * @request Create a unit test for the gameReducer. It should first enter letters and then make a guess. If the correct
 *   letters are passed, then the new game state should be success.
 */
import gameReducer from "../gameReducer";
import {
  GAME_STATE_ACTION_TYPE,
  GAME_STATE_TYPE,
  GameState,
} from "@/types/game";

describe("gameReducer", () => {
  test("enter letters and make a guess with correct letters", () => {
    const initialState: GameState = {
      word: "test",
      guess: Array(4).fill(""),
      guessIndex: 0,
      guesses: [],
      state: GAME_STATE_TYPE.PLAYING,
    };

    const enterLetter = (letter: string) => ({
      type: GAME_STATE_ACTION_TYPE.ENTER_LETTER,
      payload: { letter },
    });

    const guess = { type: GAME_STATE_ACTION_TYPE.GUESS, payload: {} };

    const stateAfterEnteringLetters = gameReducer(
      gameReducer(
        gameReducer(
          gameReducer(initialState, enterLetter("t")),
          enterLetter("e")
        ),
        enterLetter("s")
      ),
      enterLetter("t")
    );

    const finalState = gameReducer(stateAfterEnteringLetters, guess);

    expect(finalState.state).toBe(GAME_STATE_TYPE.SUCCESS);
  });

  test("achieve failed game state correctly", () => {
    const initialState: GameState = {
      word: "test",
      guess: Array(4).fill(""),
      guessIndex: 0,
      guesses: [],
      state: GAME_STATE_TYPE.PLAYING,
    };

    const enterLetter = (letter: string) => ({
      type: GAME_STATE_ACTION_TYPE.ENTER_LETTER,
      payload: { letter },
    });

    const guess = { type: GAME_STATE_ACTION_TYPE.GUESS, payload: {} };

    // Make 5 incorrect guesses
    for (let i = 0; i < 5; i++) {
      const stateAfterEnteringLetters = gameReducer(
        gameReducer(
          gameReducer(
            gameReducer(initialState, enterLetter("a")),
            enterLetter("b")
          ),
          enterLetter("c")
        ),
        enterLetter("d")
      );

      const finalState = gameReducer(stateAfterEnteringLetters, guess);

      expect(finalState.state).toBe(GAME_STATE_TYPE.PLAYING);
    }
  });
});
