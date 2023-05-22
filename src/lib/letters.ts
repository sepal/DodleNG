import { LETTER_TYPE } from "@/types/letter";

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
