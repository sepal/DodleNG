import {
  GAME_STATE_ACTION_TYPE,
  GAME_STATE_TYPE,
  GameState,
  GameStateAction,
} from "@/types/game";

export default function (state: GameState, action: GameStateAction) {
  const { word } = state;
  const { type, payload } = action;
  const newGuess = [...state.guess];

  switch (type) {
    case GAME_STATE_ACTION_TYPE.ENTER_LETTER:
      if (
        action.payload.letter === undefined ||
        state.guessIndex >= word.length
      ) {
        return state;
      }
      newGuess[state.guessIndex] = action.payload.letter;

      return {
        ...state,
        guess: newGuess,
        guessIndex: state.guessIndex + 1,
      };

    case GAME_STATE_ACTION_TYPE.REMOVE_LETTER:
      if (state.guessIndex <= 0) {
        return state;
      }
      newGuess[state.guessIndex - 1] = "";
      return {
        ...state,
        guess: newGuess,
        guessIndex: state.guessIndex - 1,
      };

    case GAME_STATE_ACTION_TYPE.SET_GUESS_INDEX:
      if (
        action.payload.guessIndex === undefined ||
        action.payload.guessIndex < 0 ||
        action.payload.guessIndex >= state.word.length
      ) {
        return state;
      }
      return {
        ...state,
        guessIndex: action.payload.guessIndex,
      };

    case GAME_STATE_ACTION_TYPE.GUESS:
      const guessLength = newGuess.filter((letter) => letter != "");
      console.log(guessLength);
      if (guessLength.length != word.length) {
        return state;
      }
      const guessString = newGuess.join("");
      if (state.guesses.length >= 4) {
        const newGameState =
          guessString.toLowerCase() == word.toLowerCase()
            ? GAME_STATE_TYPE.SUCCESS
            : GAME_STATE_TYPE.FAILED;

        return {
          ...state,
          guesses: [...state.guesses, guessString],
          state: newGameState,
          guess: Array(word.length).fill(""),
          guessIndex: 0,
        };
      }

      return {
        ...state,
        guesses: [...state.guesses, guessString],
        guess: Array(word.length).fill(""),
        guessIndex: 0,
      };
    default:
      return state;
  }
}
