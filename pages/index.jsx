import Link from "next/link";
import { createContext, useState } from "react";
import SetDifficulty from "./components/SetDifficulty";

export default function Home() {
  return (
    <>
      <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center">
        <h1 className="font-bold text-2xl">Welcome to How Many Capitals</h1>

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
