import { createContext } from "react";

type HighScoreContextTypes = {
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
};

export const HighScoreContext = createContext<HighScoreContextTypes | null>(
  null
);
