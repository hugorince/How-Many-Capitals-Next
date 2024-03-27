import { type MouseEvent, useContext } from "react";
import { AppContext } from "../../pages/context/AppContext";
import { Difficulty } from "../../pages/_app";

interface DifficultyButtonProps {
  difficultyProp: Difficulty;
}

export const DifficultyButton = ({ difficultyProp }: DifficultyButtonProps) => {
  const { difficulty, setDifficulty } = useContext(AppContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setDifficulty(target.value as Difficulty);
  };

  const backGroundColor =
    difficulty === "beginner"
      ? "bg-green-700"
      : difficulty === "intermediate"
      ? "bg-blue-700"
      : "bg-red-700";

  return (
    <>
      {difficulty === difficultyProp ? (
        <button
          className={`border border-black p-2 rounded ${backGroundColor} text-white`}
          disabled
        >
          {difficultyProp}
        </button>
      ) : (
        <button
          className="border border-black p-2 rounded hover:bg-black hover:text-white"
          value={difficultyProp}
          onClick={handleClick}
        >
          {difficultyProp}
        </button>
      )}
    </>
  );
};
