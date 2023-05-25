import { useGame } from "@/lib/gameContext";
import { Key } from "./Key";
import { KeyRow } from "./KeyRow";
import { GAME_STATE_TYPE } from "@/types/game";
import { KeyboardHandler } from "./KeyboardHandler";
import { getKeyStates } from "@/lib/keyStates";

export const Keyboard = () => {
  const { state, handleAddLetter, handleRemoveLetter, handleGuess } = useGame();

  if (state.state != GAME_STATE_TYPE.PLAYING) {
    return <></>;
  }

  const handleKeyClick = (value: string) => {
    handleAddLetter(value);
  };

  const handleEnterClick = (value: string) => {
    handleGuess();
  };

  const handleDeleteClick = (value: string) => {
    handleRemoveLetter();
  };

  let keyStates = getKeyStates(state.game.word, state.guesses);

  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
    (v) => (
      <Key key={v} value={v} onClick={handleKeyClick} type={keyStates[v]}>
        {v}
      </Key>
    )
  );
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((v) => (
    <Key key={v} value={v} onClick={handleKeyClick} type={keyStates[v]}>
      {v}
    </Key>
  ));
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"].map((v) => (
    <Key key={v} value={v} onClick={handleKeyClick} type={keyStates[v]}>
      {v}
    </Key>
  ));

  return (
    <div className="flex flex-col items-center">
      <KeyboardHandler
        handleAddLetter={handleAddLetter}
        handleRemoveLetter={handleRemoveLetter}
        handleGuess={handleGuess}
      />
      <KeyRow>{firstRow}</KeyRow>
      <KeyRow>{secondRow}</KeyRow>
      <KeyRow>
        <Key value="enter" onClick={handleEnterClick}>
          Enter
        </Key>
        {thirdRow}
        <Key value="delete" onClick={handleDeleteClick}>
          Delete
        </Key>
      </KeyRow>
    </div>
  );
};
