import { createContext } from "react";

type DifficultyContextTypes = {
  difficulty: string;
  setDifficulty: (c: string) => void;
};

export const DifficultyContext = createContext<DifficultyContextTypes>({
  difficulty: "",
  setDifficulty: () => {},
});
