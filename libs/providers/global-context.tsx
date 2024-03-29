import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
  type ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
  useRef,
} from "react";

type Highscore = {
  name: string;
  score: number;
};

export type Highscores = {
  easy: Highscore;
  medium: Highscore;
  hard: Highscore;
};

export type Difficulty = "beginner" | "intermediate" | "expert";

export type GlobalContextTypes = {
  difficulty: Difficulty;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
  highscores: Highscores;
  setHighScores: Dispatch<SetStateAction<Highscores>>;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  buttonRef: MutableRefObject<HTMLDivElement>;
  bonusRef: MutableRefObject<HTMLDivElement>;
  submitGuessButtonRef: MutableRefObject<HTMLButtonElement>;
};

export const GlobalContext = createContext<GlobalContextTypes>({
  difficulty: null,
  setDifficulty: () => null,
  highscores: null,
  setHighScores: () => null,
  score: null,
  setScore: () => null,
  buttonRef: null,
  bonusRef: null,
  submitGuessButtonRef: null,
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [highscores, setHighScores] = useState({
    easy: {
      name: "",
      score: 0,
    },
    medium: {
      name: "",
      score: 0,
    },
    hard: {
      name: "",
      score: 0,
    },
  });
  const [score, setScore] = useState(0);
  const buttonRef = useRef(null);
  const bonusRef = useRef(null);
  const submitGuessButtonRef = useRef(null);

  const value = {
    difficulty,
    setDifficulty,
    highscores,
    setHighScores,
    score,
    setScore,
    buttonRef,
    bonusRef,
    submitGuessButtonRef,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("You must wrap your component with AppContextProvider");
  }
  return context;
};
