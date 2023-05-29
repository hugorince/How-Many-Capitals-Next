import { useState, useContext } from "react";
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
        <button
          className="border border-black p-2 rounded hover:bg-black hover:text-white focus:bg-gray-600 focus:text-white"
          value={"easy"}
          onClick={handleClick}
        >
          easy
        </button>
        <button
          className="border border-black p-2 rounded hover:bg-black hover:text-white focus:bg-gray-600 focus:text-white"
          value={"medium"}
          onClick={handleClick}
        >
          medium
        </button>
        <button
          className="border border-black p-2 rounded hover:bg-black hover:text-white focus:bg-gray-600 focus:text-white"
          value={"hard"}
          onClick={handleClick}
        >
          hard
        </button>
      </div>
    </>
  );
}
