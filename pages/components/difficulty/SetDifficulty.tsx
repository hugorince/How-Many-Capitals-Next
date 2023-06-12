import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const setDifficulty = () => {
  const { difficulty, setDifficulty } = useContext(AppContext);

  const handleClick = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-sm">set difficulty :</h2>
        <div className="flex space-x-2">
          <div>
            {difficulty === "easy" ? (
              <button
                className="border border-black p-2 rounded bg-green-700 text-white sm:hover:bg-black hover:text-white"
                value={"easy"}
                onClick={handleClick}
              >
                beginner
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"easy"}
                onClick={handleClick}
              >
                beginner
              </button>
            )}
          </div>
          <div>
            {difficulty === "medium" ? (
              <button
                className="border border-black p-2 rounded bg-blue-700 text-white sm:hover:bg-black hover:text-white"
                value={"medium"}
                onClick={handleClick}
              >
                intermediate
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"medium"}
                onClick={handleClick}
              >
                intermediate
              </button>
            )}
          </div>
          <div>
            {difficulty === "hard" ? (
              <button
                className="border border-black p-2 rounded bg-red-700 text-white sm:hover:bg-black sm:hover:text-white"
                value={"hard"}
                onClick={handleClick}
              >
                expert
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"hard"}
                onClick={handleClick}
              >
                expert
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default setDifficulty;
