import { useState, useContext } from "react";
import { insertScore } from "../../api/crud";
import { DifficultyContext } from "../difficulty/DifficultyContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ScoreContext } from "../quiz/ScoreContext";

export default function NewHighScore() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { score, setScore } = useContext(ScoreContext);
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await insertScore({ score, name, difficulty });
    router.push("/");
  };

  const handleClick = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 place-content-center items-center h-screen w-screen">
        <h1>Congrats, You've got a Highscore!!</h1>
        <p>Would you like to register it?</p>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="border border-black p-2"
            placeholder="enter your name"
          />
          <button
            //type="Submit"
            className="border border-black p-2 rounded hover:bg-black hover:text-white"
          >
            Send
          </button>
        </form>
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
}
