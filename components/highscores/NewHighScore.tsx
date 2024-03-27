import { type SyntheticEvent, useState, useContext } from "react";
import { insertScore } from "../../api/crud";
import Router from "next/router";
import Link from "next/link";
import { AppContext } from "../../pages/context/AppContext";

export default function NewHighScore() {
  const { difficulty, score, setScore } = useContext(AppContext);
  const [name, setName] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await insertScore({ score, name, difficulty });
    setScore(0);
    Router.push("/");
  };

  const handleClick = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex flex-col space-y-4 place-content-center items-center h-screen w-screen">
        <div className="text-4xl">🏆</div>
        <h1 className="font-bold text-xl">
          Congrats, You've got a Highscore!!
        </h1>
        <p className="italic">Would you like to register it?</p>
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
          <button className="border border-black p-2 rounded hover:bg-black hover:text-white">
            Send
          </button>
        </form>
        <Link
          href={"/"}
          className="italic underline decoration-red-500 cursor-pointer bottom-16 absolute text-xl"
          onClick={handleClick}
        >
          Play again ?
        </Link>
      </div>
    </>
  );
}
