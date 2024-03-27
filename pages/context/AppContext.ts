import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
  createContext,
} from "react";
import type { Difficulty } from "../_app";

type AppContextTypes = {
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
  highscores: {
    easy: {
      name: string;
      score: number;
    };
    medium: {
      name: string;
      score: number;
    };
    hard: {
      name: string;
      score: number;
    };
  };
  setHighScores: React.Dispatch<
    React.SetStateAction<{
      easy: {
        name: string;
        score: number;
      };
      medium: {
        name: string;
        score: number;
      };
      hard: {
        name: string;
        score: number;
      };
    }>
  >;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  buttonRef: MutableRefObject<HTMLButtonElement>;
  bonusRef: MutableRefObject<HTMLButtonElement>;
  submitGuessButtonRef: MutableRefObject<HTMLButtonElement>;
};

export const AppContext = createContext<AppContextTypes | null>(null);
