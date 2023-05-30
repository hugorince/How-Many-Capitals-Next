import { useContext } from "react";
import { DifficultyContext } from "@/utils/DifficultyContext";
import { HighScoreContext } from "@/utils/HighScoreContext";

export default function HighscoreQuizDisplay() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { highscores, setHighScores } = useContext(HighScoreContext);
  return (
    <>
      {difficulty === "easy" ? (
        <div>
          Highscore in {difficulty} is {highscores.easy.score} by{" "}
          {highscores.easy.name}
        </div>
      ) : difficulty === "medium" ? (
        <div>
          Highscore in {difficulty} is {highscores.medium.score} by{" "}
          {highscores.medium.name}
        </div>
      ) : (
        <div>
          Highscore in {difficulty} is {highscores.hard.score} by{" "}
          {highscores.hard.name}
        </div>
      )}
    </>
  );
}
