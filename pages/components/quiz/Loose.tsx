import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Loose = () => {
  const { score, setScore } = useContext(AppContext);

  const handleClick = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex flex-col space-y-8 place-content-center items-center h-screen w-screen">
        <h1 className="text-2xl font-bold">Game Over 😞</h1>
        <h2>
          Your score is{" "}
          <span className="underline decoration-blue-700 text-xl">{score}</span>
        </h2>
        <Link
          href={"/"}
          className="text-xl italic cursor-pointer underline decoration-green-700"
          onClick={handleClick}
        >
          Play again ?
        </Link>
      </div>
    </>
  );
};

export default Loose;
