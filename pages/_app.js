import "@/styles/globals.css";
import { useState } from "react";
import { DifficultyContext } from "../utils/DifficultyContext";
import { HighScoreContext } from "@/utils/HighScoreContext";

export default function App({ Component, pageProps }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [highscores, setHighScores] = useState({
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
