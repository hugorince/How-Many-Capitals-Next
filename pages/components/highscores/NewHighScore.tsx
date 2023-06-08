import { useState, useContext } from "react";
import { insertScore } from "../../api/crud";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AppContext } from "../../context/AppContext";

export default function NewHighScore() {
  const { difficulty, setDifficulty, score, setScore } = useContext(AppContext);
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
