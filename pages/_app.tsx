import React, { useRef, useState } from "react";
import "../styles/globals.css";
import { AppContext } from "./context/AppContext";

export type Difficulty = "beginner" | "intermediate" | "expert";

const App = ({ Component, pageProps }) => {
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

  return (
    <>
      <AppContext.Provider
        value={{
          difficulty,
          setDifficulty,
          highscores,
          setHighScores,
          score,
          setScore,
          buttonRef,
          bonusRef,
          submitGuessButtonRef,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
};

export default App;
