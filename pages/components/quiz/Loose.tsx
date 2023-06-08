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
      <div className="flex flex-col space-y-4 place-content-center items-center h-screen w-screen">
        <div>Oh no, you've lost 😞</div>
        <div>Your score is {score}</div>
        <Link
          href={"/"}
          className="border border-black p-2 rounded hover:bg-black hover:text-white"
          onClick={handleClick}
        >
          Play again ?
        </Link>
      </div>
    </>
  );
};

export default Loose;
