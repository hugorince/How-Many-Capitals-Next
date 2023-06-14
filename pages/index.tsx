import Link from "next/link";
import { useContext, useEffect } from "react";
import SetDifficulty from "./components/difficulty/SetDifficulty";
import { fetchHighScores } from "./api/crud";
import HighscoreDisplay from "./components/highscores/HighscoresDisplay";
import { AppContext } from "./context/AppContext";

const Home = () => {
  const { highscores, setHighScores } = useContext(AppContext);

  useEffect(() => {
    fetchHighScores(setHighScores);
  }, []);

  return (
    <>
      <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4">
        <div>
          <h1 className="font-bold text-xl">Welcome to How Many Capitals</h1>
          <h2 className="italic">find the most capitals in a row</h2>
        </div>

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
};

export default Home;
