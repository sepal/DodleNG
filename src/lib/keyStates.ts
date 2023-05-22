import { KEY_TYPE } from "@/types/keyboard";

export function getKeyTypeColor(keyType: KEY_TYPE) {
  switch (keyType) {
    case KEY_TYPE.WRONG:
      return "bg-slate-400 text-white";
    case KEY_TYPE.CORRECT:
      return "bg-green-700 text-white";
    case KEY_TYPE.PRESENT:
      return "bg-yellow-200";
    default:
      return "bg-white";
  }
}

export function getKeyStates(word: string, guesses: string[]) {
  let states: { [key: string]: KEY_TYPE } = {};

  const solution = word.toLowerCase();

  guesses.forEach((guess) => {
    if (guess.length != word.length) {
      throw "Invalid guess size";
    }
    const splitGuess = Array.from(guess.toLowerCase());
    splitGuess.forEach((letter, i) => {
      if (!solution.includes(letter)) {
        states[letter] = KEY_TYPE.WRONG;
        return;
      } else if (letter == solution[i]) {
        states[letter] = KEY_TYPE.CORRECT;
        return;
      } else if (states[letter] != KEY_TYPE.CORRECT) {
        states[letter] = KEY_TYPE.PRESENT;
      }
    });
  });

  return states;
}
