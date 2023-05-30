import { HighScoreContext } from "@/utils/HighScoreContext";
import { useContext } from "react";

export default function HighscoreDisplay() {
  const { highscores, setHighScores } = useContext(HighScoreContext);
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="font-bold">Hall Of Fame</h1>
        <div className="flex space-x-2">
          <div className="flex flex-col">
            <div>Easy</div>
            <div className="italic">{highscores.easy.name}</div>
            <div className="font-bold">{highscores.easy.score}</div>
          </div>

          <div className="flex flex-col">
            <div>Medium</div>
            <div className="italic">{highscores.medium.name}</div>
            <div className="font-bold">{highscores.medium.score}</div>
          </div>
          <div className="flex flex-col">
            <div>Hard</div>
            <div className="italic">{highscores.hard.name}</div>
            <div className="font-bold">{highscores.hard.score}</div>
          </div>
        </div>
      </div>
    </>
  );
}
