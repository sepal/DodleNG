export enum GAME_STATE_TYPE {
  IDLE = "idle",
  PLAYING = "playing",
  SUCCESS = "success",
  FAILED = "failed",
}

export enum GAME_STATE_ACTION_TYPE {
  ENTER_LETTER = "enter_letter",
  REMOVE_LETTER = "remove_letter",
  SET_GUESS_INDEX = "set_guess_index",
  GUESS = "guess",
  FINISH = "finish",
}

export interface GameState {
  word: string;
  prompt: string;
  guess: string[];
  guesses: string[];
  guessIndex: number;
  state: GAME_STATE_TYPE;
}

export interface GameStateActionPayload {
  letter?: string;
  guessIndex?: number;
}

export interface GameStateAction {
  type: GAME_STATE_ACTION_TYPE;
  payload: GameStateActionPayload;
}
