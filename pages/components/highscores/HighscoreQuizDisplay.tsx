import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HighscoreQuizDisplay = () => {
  const { difficulty, setDifficulty, highscores, setHighScores } =
    useContext(AppContext);
  return (
    <>
      {difficulty === "easy" ? (
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col items-center">
            <span className="relative top-2">👑</span>
            <p className="text-xl font-semibold underline decoration-yellow-500">
              {highscores.easy.name}
            </p>
          </div>
          <p className="italic text-2xl pt-6">{highscores.easy.score}</p>
        </div>
      ) : difficulty === "medium" ? (
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col items-center">
            <span className="relative top-2">👑</span>
            <p className="text-xl font-semibold underline decoration-yellow-500">
              {highscores.medium.name}
            </p>
          </div>
          <p className="italic text-2xl pt-6">{highscores.medium.score}</p>
        </div>
      ) : (
        <div className="flex space-x-4 items-center">
          <div className="flex flex-col items-center">
            <span className="relative top-2">👑</span>
            <p className="text-xl font-semibold underline decoration-yellow-500">
              {highscores.hard.name}
            </p>
          </div>
          <p className="italic text-2xl pt-6">{highscores.hard.score}</p>
        </div>
      )}
    </>
  );
};

export default HighscoreQuizDisplay;
