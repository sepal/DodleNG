import { ReactNode, createContext, useContext, useState } from "react";
import { onKeyPress } from "./onKeyPress";

interface GameContextProps {
  word: string;
  guess: string[];
  guessIndex: number;
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
  const [guess, setGuess] = useState<string[]>(Array(word.length).fill(""));
  const [guessIndex, setGuessIndex] = useState<number>(0);

  const keyHandler = (key: string) => {
    if (
      key >= "a" &&
      key <= "z" &&
      key.length == 1 &&
      guessIndex < word.length
    ) {
      const newGuess = [...guess];
      newGuess[guessIndex] = key;
      setGuess(newGuess);
      setGuessIndex(guessIndex + 1);
    }

    if (key === "backspace" && guessIndex > 0) {
      const newIndex = guessIndex - 1;
      const newGuess = [...guess];
      newGuess[newIndex] = "";
      setGuess(newGuess);
      setGuessIndex(newIndex);
    }
  };

  onKeyPress(keyHandler);

  return (
    <GameContext.Provider value={{ word, guess, guessIndex, setGuessIndex }}>
      {children}
    </GameContext.Provider>
  );
};
