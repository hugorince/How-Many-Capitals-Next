import { useContext } from "react";
import Loose from "./components/quiz/Loose";
import NewHighScore from "./components/highscores/NewHighScore";
import { ScoreContext } from "./components/quiz/ScoreContext";
import { HighScoreContext } from "./components/highscores/HighScoreContext";
import { DifficultyContext } from "./components/difficulty/DifficultyContext";

export default function GameOver() {
  const { score, setScore } = useContext(ScoreContext);
  const { highscores, setHighScores } = useContext(HighScoreContext);
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  return (
    <>
      {difficulty === "easy" && score > highscores.easy.score ? (
        <NewHighScore score={score} />
      ) : difficulty === "medium" && score > highscores.medium.score ? (
        <NewHighScore score={score} />
      ) : difficulty === "hard" && score > highscores.hard.score ? (
        <NewHighScore score={score} />
      ) : (
        <Loose />
      )}
    </>
  );
}
