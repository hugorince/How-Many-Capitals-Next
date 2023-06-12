import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HighscoreQuizDisplay = () => {
  const { difficulty, setDifficulty, highscores, setHighScores } =
    useContext(AppContext);
  return (
    <>
      {difficulty === "easy" ? (
        <div className="flex flex-col items-center">
          <p className="absolute">{highscores.easy.name}</p>
          <span className="relative bottom-5">👑</span>
          <p>{highscores.easy.score}</p>
        </div>
      ) : difficulty === "medium" ? (
        <div className="flex flex-col items-center">
          <p className="absolute">{highscores.medium.name}</p>
          <span className="relative bottom-5">👑</span>
          <p>{highscores.medium.score}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <p className="absolute">{highscores.hard.name}</p>
          <span className="relative bottom-5">👑</span>
          <p>{highscores.hard.score}</p>
        </div>
      )}
    </>
  );
};

export default HighscoreQuizDisplay;
