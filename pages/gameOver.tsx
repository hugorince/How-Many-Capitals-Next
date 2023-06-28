import { useContext } from "react";
import Loose from "./components/quiz/Loose";
import NewHighScore from "./components/highscores/NewHighScore";
import { AppContext } from "./context/AppContext";

const GameOver = () => {
  const {
    score,
    setScore,
    highscores,
    setHighScores,
    difficulty,
    setDifficulty,
  } = useContext(AppContext);

  return (
    <>
      {difficulty === "beginner" && score > highscores.easy.score ? (
        <NewHighScore />
      ) : difficulty === "intermediate" && score > highscores.medium.score ? (
        <NewHighScore />
      ) : difficulty === "expert" && score > highscores.hard.score ? (
        <NewHighScore />
      ) : (
        <Loose />
      )}
    </>
  );
};

export default GameOver;
