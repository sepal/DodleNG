import { onKeyPress } from "@/lib/onKeyPress";

interface Props {
  handleAddLetter: (letter: string) => void;
  handleRemoveLetter: () => void;
  handleGuess: () => void;
}

export const KeyboardHandler = ({
  handleAddLetter,
  handleRemoveLetter,
  handleGuess,
}: Props) => {
  const handleKeyPress = (key: string) => {
    if (key >= "a" && key <= "z" && key.length == 1) {
      handleAddLetter(key);
    }

    if (key === "backspace") {
      handleRemoveLetter();
    }

    if (key == "enter") {
      handleGuess();
    }
  };
  onKeyPress(handleKeyPress);
  return <></>;
};
