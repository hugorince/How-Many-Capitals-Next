import Link from "next/link";
import { createContext, useState, useContext, useEffect } from "react";
import SetDifficulty from "./components/SetDifficulty";
import { HighScoreContext } from "@/utils/HighScoreContext";
import { fetchHighScores } from "./api/crud";
import HighscoreDisplay from "./components/HighscoresDisplay";

export default function Home() {
  const { highscores, setHighScores } = useContext(HighScoreContext);

  useEffect(() => {
    fetchHighScores(setHighScores);
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center">
        <h1 className="font-bold text-2xl">Welcome to How Many Capitals</h1>
        <HighscoreDisplay />

        <SetDifficulty />

        <Link
          className="border border-black p-2 rounded hover:bg-black hover:text-white"
          href="/quiz"
        >
          Start Quiz
        </Link>
      </div>
    </>
  );
}
