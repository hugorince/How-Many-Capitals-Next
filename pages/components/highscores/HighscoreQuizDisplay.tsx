import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HighscoreQuizDisplay = () => {
  const { difficulty, setDifficulty, highscores, setHighScores } =
    useContext(AppContext);
  return (
    <>
      <div className="flex justify-center border border-black rounded relative pl-12 pr-12 pb-2 pt-2">
        <p className="absolute bottom-[3.6rem] bg-white p-1">player to beat</p>
        {difficulty === "beginner" ? (
          <div className="flex space-x-4 items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="relative top-2">👑</span>
              <p className="text-xl font-semibold underline decoration-yellow-500">
                {highscores.easy.name}
              </p>
            </div>
            <p className="italic text-2xl pt-6">{highscores.easy.score}</p>
          </div>
        ) : difficulty === "intermediate" ? (
          <div className="flex space-x-4 items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="relative top-2">👑</span>
              <p className="text-xl font-semibold underline decoration-yellow-500">
                {highscores.medium.name}
              </p>
            </div>
            <p className="italic text-2xl pt-6">{highscores.medium.score}</p>
          </div>
        ) : (
          <div className="flex space-x-4 items-center justify-center">
            <div className="flex flex-col items-center">
              <span className="relative top-2">👑</span>
              <p className="text-xl font-semibold underline decoration-yellow-500">
                {highscores.hard.name}
              </p>
            </div>
            <p className="italic text-2xl pt-6">{highscores.hard.score}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HighscoreQuizDisplay;
