import { createContext } from "react";

type ScoreContextTypes = {
  score: number;
  setScore: any;
};

export const ScoreContext = createContext<ScoreContextTypes>(null);
