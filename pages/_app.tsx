import React, { useState } from "react";
import "../styles/globals.css";
import { DifficultyContext } from "./components/difficulty/DifficultyContext";
import { HighScoreContext } from "./components/highscores/HighScoreContext";

export default function App({ Component, pageProps }) {
  const [difficulty, setDifficulty] = useState("easy");
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
