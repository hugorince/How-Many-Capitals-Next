import React, { useRef, useState } from "react";
import "../styles/globals.css";
import { DifficultyContext } from "./components/difficulty/DifficultyContext";
import { HighScoreContext } from "./components/highscores/HighScoreContext";
import { ScoreContext } from "./components/quiz/ScoreContext";
import { ButtonRefContext } from "./components/quiz/ButtonRefContext";

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
  const [score, setScore] = useState(0);
  const buttonRef = useRef(null);

  return (
    <>
      <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
        <HighScoreContext.Provider value={{ highscores, setHighScores }}>
          <ScoreContext.Provider value={{ score, setScore }}>
            <ButtonRefContext.Provider value={{ buttonRef }}>
              <Component {...pageProps} />
            </ButtonRefContext.Provider>
          </ScoreContext.Provider>
        </HighScoreContext.Provider>
      </DifficultyContext.Provider>
    </>
  );
}
