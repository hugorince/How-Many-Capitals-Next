import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const setDifficulty = () => {
  const { difficulty, setDifficulty } = useContext(AppContext);

  const handleClick = (e: any) => {
    setDifficulty(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-sm">set difficulty :</h2>
        <div className="flex space-x-2">
          <div>
            {difficulty === "beginner" ? (
              <button
                className="border border-black p-2 rounded bg-green-700 text-white sm:hover:bg-black hover:text-white"
                value={"beginner"}
                onClick={handleClick}
              >
                beginner
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"beginner"}
                onClick={handleClick}
              >
                beginner
              </button>
            )}
          </div>
          <div>
            {difficulty === "intermediate" ? (
              <button
                className="border border-black p-2 rounded bg-blue-700 text-white sm:hover:bg-black hover:text-white"
                value={"intermediate"}
                onClick={handleClick}
              >
                intermediate
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"intermediate"}
                onClick={handleClick}
              >
                intermediate
              </button>
            )}
          </div>
          <div>
            {difficulty === "expert" ? (
              <button
                className="border border-black p-2 rounded bg-red-700 text-white sm:hover:bg-black sm:hover:text-white"
                value={"expert"}
                onClick={handleClick}
              >
                expert
              </button>
            ) : (
              <button
                className="border border-black p-2 rounded hover:bg-black hover:text-white"
                value={"expert"}
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
