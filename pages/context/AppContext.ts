import { createContext } from "react";

type AppContextTypes = {
  difficulty: string;
  setDifficulty: (c: string) => void;
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
  setHighScores: any;
  score: number;
  setScore: (e: number) => void;
  buttonRef: any;
  bonusRef: any;
};

export const AppContext = createContext<AppContextTypes | null>(null);
