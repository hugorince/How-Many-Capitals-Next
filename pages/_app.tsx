import React, { useRef, useState } from "react";
import "../styles/globals.css";
import { AppContext } from "./context/AppContext";

const App = ({ Component, pageProps }) => {
  const [difficulty, setDifficulty] = useState("beginner");
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
      <AppContext.Provider
        value={{
          difficulty,
          setDifficulty,
          highscores,
          setHighScores,
          score,
          setScore,
          buttonRef,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
};

export default App;
