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
  setScore: (e: number) => void;
  buttonRef: React.MutableRefObject<any>;
  bonusRef: React.MutableRefObject<any>;
  submitGuessButtonRef: React.MutableRefObject<any>;
};

export const AppContext = createContext<AppContextTypes | null>(null);
