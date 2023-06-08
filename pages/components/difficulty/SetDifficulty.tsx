import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const setDifficulty = () => {
  const { difficulty, setDifficulty } = useContext(AppContext);

  const handleClick = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <div>
        <h2 className="italic">choose difficulty :</h2>
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
      </div>
    </>
  );
};

export default setDifficulty;
