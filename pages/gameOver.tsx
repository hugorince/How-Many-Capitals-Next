import Loose from "../libs/components/quiz/Loose";
import NewHighScore from "../libs/components/highscores/NewHighScore";
import { useGlobalContext } from "../libs/providers/global-context";

const GameOver = () => {
  const { score, highscores, difficulty } = useGlobalContext();

  return (
    <>
      {(difficulty === "beginner" && score > highscores.easy.score) ||
      (difficulty === "intermediate" && score > highscores.medium.score) ||
      (difficulty === "expert" && score > highscores.hard.score) ? (
        <NewHighScore />
      ) : (
        <Loose />
      )}
    </>
  );
};

export default GameOver;
