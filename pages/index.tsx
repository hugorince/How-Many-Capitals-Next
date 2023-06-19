import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SetDifficulty from "./components/difficulty/SetDifficulty";
import { fetchHighScores } from "./api/crud";
import HighscoreDisplay from "./components/highscores/HighscoresDisplay";
import { AppContext } from "./context/AppContext";
import { motion } from "framer-motion";

const Home = () => {
  const { highscores, setHighScores } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchHighScores(setHighScores);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col text-2xl font-bold items-center justify-center h-screen w-screen bg-blue-700">
          <h1 className="text-white">How Many Capitals</h1>
        </div>
      ) : (
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4"
        >
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
        </motion.div>
      )}
    </>
  );
};

export default Home;
