import {
  GAME_STATE_ACTION_TYPE,
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

    default:
      return state;
  }
}
