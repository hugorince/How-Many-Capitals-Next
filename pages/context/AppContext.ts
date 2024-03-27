import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
  createContext,
} from "react";
import type { Difficulty } from "../_app";

type Highscore = {
  name: string;
  score: number;
};

export type Highscores = {
  easy: Highscore;
  medium: Highscore;
  hard: Highscore;
};

type AppContextTypes = {
  difficulty: Difficulty;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
  highscores: Highscores;
  setHighScores: Dispatch<SetStateAction<Highscores>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  buttonRef: MutableRefObject<HTMLButtonElement>;
  bonusRef: MutableRefObject<HTMLDivElement>;
  submitGuessButtonRef: MutableRefObject<HTMLButtonElement>;
};

export const AppContext = createContext<AppContextTypes | null>(null);
