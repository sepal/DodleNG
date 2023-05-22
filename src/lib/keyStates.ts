import { LETTER_TYPE } from "@/types/letter";
import { splitWord } from "@/utils/words";

export function getLetterTypeColor(keyType: LETTER_TYPE) {
  switch (keyType) {
    case LETTER_TYPE.WRONG:
      return "bg-slate-400 text-white";
    case LETTER_TYPE.CORRECT:
      return "bg-green-700 text-white";
    case LETTER_TYPE.PRESENT:
      return "bg-yellow-200";
    default:
      return "bg-white";
  }
}

export function getKeyStates(word: string, guesses: string[]) {
  let states: { [key: string]: LETTER_TYPE } = {};

  const solution = word.toLowerCase();

  guesses.forEach((guess) => {
    if (guess.length != word.length) {
      throw "Invalid guess size";
    }
    const splitGuess = splitWord(guess.toLowerCase());
    splitGuess.forEach((letter, i) => {
      if (!solution.includes(letter)) {
        states[letter] = LETTER_TYPE.WRONG;
        return;
      } else if (letter == solution[i]) {
        states[letter] = LETTER_TYPE.CORRECT;
        return;
      } else if (states[letter] != LETTER_TYPE.CORRECT) {
        states[letter] = LETTER_TYPE.PRESENT;
      }
    });
  });

  return states;
}
