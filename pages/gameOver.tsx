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
      {difficulty === "easy" && score > highscores.easy.score ? (
        <NewHighScore />
      ) : difficulty === "medium" && score > highscores.medium.score ? (
        <NewHighScore />
      ) : difficulty === "hard" && score > highscores.hard.score ? (
        <NewHighScore />
      ) : (
        <Loose />
      )}
    </>
  );
};

export default GameOver;
