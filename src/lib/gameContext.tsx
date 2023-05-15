import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { onKeyPress } from "./onKeyPress";
import gameReducer from "./gameReducer";
import {
  GAME_STATE_ACTION_TYPE,
  GAME_STATE_TYPE,
  GameState,
} from "@/types/game";

interface GameContextProps {
  state: GameState;
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
  word: string;
  children?: ReactNode;
}

export const GameProvider = ({ children, word }: GameProviderProps) => {
  const [state, dispatch] = useReducer(gameReducer, {
    word: word,
    guess: Array(word.length).fill(""),
    guessIndex: 0,
    state: GAME_STATE_TYPE.IDLE,
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

  const keyHandler = (key: string) => {
    if (key >= "a" && key <= "z" && key.length == 1) {
      handleAddLetter(key);
    }

    if (key === "backspace") {
      handleRemoveLetter();
    }
  };

  onKeyPress(keyHandler);

  return (
    <GameContext.Provider value={{ state, setGuessIndex: handleGuessIndex }}>
      {children}
    </GameContext.Provider>
  );
};
