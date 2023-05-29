import { useContext } from "react";
import { DifficultyContext } from "./DifficultyContext";

export default function setDifficulty() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  const handleClick = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <h2>Set Difficulty: </h2>
      <div className="flex space-x-2">
        <div>
          {difficulty === "easy" ? (
            <button
              className="border border-black p-2 rounded bg-gray-600 text-white hover:bg-black hover:text-white"
              value={"easy"}
              onClick={handleClick}
            >
              easy
            </button>
          ) : (
            <button
              className="border border-black p-2 rounded hover:bg-black hover:text-white"
              value={"easy"}
              onClick={handleClick}
            >
              easy
            </button>
          )}
        </div>
        <div>
          {difficulty === "medium" ? (
            <button
              className="border border-black p-2 rounded bg-gray-600 text-white hover:bg-black hover:text-white"
              value={"medium"}
              onClick={handleClick}
            >
              medium
            </button>
          ) : (
            <button
              className="border border-black p-2 rounded hover:bg-black hover:text-white"
              value={"medium"}
              onClick={handleClick}
            >
              medium
            </button>
          )}
        </div>
        <div>
          {difficulty === "hard" ? (
            <button
              className="border border-black p-2 rounded bg-gray-600 text-white hover:bg-black hover:text-white"
              value={"hard"}
              onClick={handleClick}
            >
              hard
            </button>
          ) : (
            <button
              className="border border-black p-2 rounded hover:bg-black hover:text-white"
              value={"hard"}
              onClick={handleClick}
            >
              hard
            </button>
          )}
        </div>
      </div>
    </>
  );
}
