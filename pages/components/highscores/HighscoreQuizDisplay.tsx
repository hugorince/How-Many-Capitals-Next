import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function HighscoreQuizDisplay() {
  const { difficulty, setDifficulty, highscores, setHighScores } =
    useContext(AppContext);
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
