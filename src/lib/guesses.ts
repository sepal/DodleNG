import { LETTER_TYPE } from "@/types/letter";
import { splitWord } from "@/utils/words";

export function getGuessState(word: string, guess: string) {
  let states: LETTER_TYPE[] = new Array(guess.length);

  const splitSolution = splitWord(word.toLowerCase());
  const splitGuess = splitWord(guess.toLowerCase());

  let charsTaken = splitSolution.map(() => false);

  splitGuess.forEach((letter, i) => {
    if (letter === splitSolution[i]) {
      states[i] = LETTER_TYPE.CORRECT;
      charsTaken[i] = true;
    } else if (!splitSolution.includes(letter)) {
      states[i] = LETTER_TYPE.WRONG;
    }
  });

  splitGuess.forEach((letter, i) => {
    // Already set to correct or wrong, so ignore.
    if (states[i]) return;

    // Handle the possible partial matches.
    const index = splitSolution.findIndex(
      (sLetter, index) => sLetter === letter && !charsTaken[index]
    );

    if (index > -1) {
      states[i] = LETTER_TYPE.PRESENT;
      charsTaken[index] = true;
    } else {
      states[i] = LETTER_TYPE.WRONG;
    }
  });

  return states;
}
