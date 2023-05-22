import { Key } from "./Key";
import { KeyRow } from "./KeyRow";

export const Keyboard = () => {
  const handleKeyClick = (value: string) => {
    console.log(value);
  };

  const handleEnterClick = (value: string) => {};

  const handleDeleteClick = (value: string) => {};

  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
    (v) => (
      <Key key={v} value={v} onClick={handleKeyClick}>
        {v}
      </Key>
    )
  );
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((v) => (
    <Key key={v} value={v} onClick={handleKeyClick}>
      {v}
    </Key>
  ));
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"].map((v) => (
    <Key key={v} value={v} onClick={handleKeyClick}>
      {v}
    </Key>
  ));

  return (
    <div className="flex flex-col items-center">
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
