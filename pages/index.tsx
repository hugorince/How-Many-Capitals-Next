import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { SetDifficulty } from "../components/difficulty";
import { fetchHighScores } from "../api/crud";
import HighscoreDisplay from "../components/highscores/HighscoresDisplay";
import { AppContext } from "./context/AppContext";
import { motion } from "framer-motion";
import Router from "next/router";
import LoadingIndex from "../components/loadingscreens/LoadingIndex";
import GameLoading from "../components/loadingscreens/GameLoading";

const Home = () => {
  const { setHighScores } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [gameLoading, setGameLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchHighScores(setHighScores);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleStartQuiz = () => {
    setGameLoading(true);
    setTimeout(() => {
      Router.push("/quiz");
    }, 3000);
  };
  return (
    <>
      {isLoading ? (
        <LoadingIndex />
      ) : gameLoading ? (
        <GameLoading />
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
          <SetDifficulty />
          <HighscoreDisplay />
          <button
            className="border border-black p-2 rounded hover:bg-black hover:text-white"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Home;
