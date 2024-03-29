import { useGlobalContext } from "../../providers/global-context";

const HighscoreDisplay = () => {
  const { highscores, difficulty } = useGlobalContext();

  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        <div className="flex flex-col items-center">
          <div>🏆</div>
          <h1 className="font-semibold underline decoration-yellow-500">
            Crown holder :
          </h1>
        </div>
        <div>
          {difficulty === "beginner" ? (
            <div className="flex flex-col items-center">
              <div className="italic text-green-700">beginner</div>
              <div className="">{highscores.easy.name}</div>
              <div className="font-bold">{highscores.easy.score}</div>
            </div>
          ) : difficulty === "intermediate" ? (
            <>
              <div className="flex flex-col items-center">
                <div className="italic text-blue-700">intermediate</div>
                <div className="">{highscores.medium.name}</div>
                <div className="font-bold">{highscores.medium.score}</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center">
                <div className="italic text-red-700">expert</div>
                <div className="">{highscores.hard.name}</div>
                <div className="font-bold">{highscores.hard.score}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HighscoreDisplay;
