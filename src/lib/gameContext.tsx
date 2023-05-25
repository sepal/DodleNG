import { ReactNode, createContext, useContext, useReducer } from "react";
import gameReducer from "./gameReducer.ts";
import {
  GAME_STATE_ACTION_TYPE,
  GAME_STATE_TYPE,
  Game,
  GameState,
} from "@/types/game";

interface GameContextProps {
  state: GameState;
  handleAddLetter: (letter: string) => void;
  handleRemoveLetter: () => void;
  handleGuess: () => void;
  setGuessIndex: (index: number) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

interface GameProviderProps {
  game: Game;
  children?: ReactNode;
}

export const GameProvider = ({ children, game }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, {
    game: game,
    guess: Array(game.word.length).fill(""),
    guessIndex: 0,
    guesses: [],
    state: GAME_STATE_TYPE.PLAYING,
  });

  function handleAddLetter(letter: string) {
    dispatch({
      type: GAME_STATE_ACTION_TYPE.ENTER_LETTER,
      payload: {
        letter: letter,
      },
    });
  }

  function handleRemoveLetter() {
    dispatch({
      type: GAME_STATE_ACTION_TYPE.REMOVE_LETTER,
      payload: {},
    });
  }

  function handleGuessIndex(index: number) {
    dispatch({
      type: GAME_STATE_ACTION_TYPE.SET_GUESS_INDEX,
      payload: {
        guessIndex: index,
      },
    });
  }

  function handleGuess() {
    dispatch({
      type: GAME_STATE_ACTION_TYPE.GUESS,
      payload: {},
    });
  }

  return (
    <GameContext.Provider
      value={{
        state,
        handleAddLetter,
        handleRemoveLetter,
        handleGuess,
        setGuessIndex: handleGuessIndex,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
