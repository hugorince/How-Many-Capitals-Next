import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import SetDifficulty from "./components/difficulty/SetDifficulty";
import { fetchHighScores } from "./api/crud";
import HighscoreDisplay from "./components/highscores/HighscoresDisplay";
import { AppContext } from "./context/AppContext";
import { motion } from "framer-motion";
import Router from "next/router";

const Home = () => {
  const { highscores, setHighScores, difficulty } = useContext(AppContext);
  const [fullscreenMessage, setFullScreenMessage] =
    useState("How Many Capitals");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchHighScores(setHighScores);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleStartQuiz = () => {
    setFullScreenMessage(`game starting in ${difficulty} mode`);
    setIsLoading(true);
    setTimeout(() => {
      Router.push("/quiz");
    }, 2000);
  };
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col text-2xl font-bold items-center justify-center h-screen w-screen bg-blue-700">
          <h1 className="text-white">{fullscreenMessage}</h1>
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
