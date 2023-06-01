import React, { useState } from "react";
import "../styles/globals.css";
import { DifficultyContext } from "../utils/DifficultyContext";
import { HighScoreContext } from "../utils/HighScoreContext";

export default function App({ Component, pageProps }) {
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [highscores, setHighScores] = useState<any>({
    easy: {
      name: "",
      score: null,
    },
    medium: {
      name: "",
      score: null,
    },
    hard: {
      name: "",
      score: null,
    },
  });

  return (
    <>
      <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
        <HighScoreContext.Provider value={{ highscores, setHighScores }}>
          <Component {...pageProps} />
        </HighScoreContext.Provider>
      </DifficultyContext.Provider>
    </>
  );
}
