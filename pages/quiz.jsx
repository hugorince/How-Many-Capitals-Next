import Link from "next/link";
import QuizBoxesBuilder from "./components/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "../utils/DifficultyContext";
import { capitals } from "@/utils/citiesData";
import { createAnswer, buildChoices } from "@/utils/quizLogic";
import Loose from "./components/Loose";
import NewHighScore from "./components/NewHighScore";
import { HighScoreContext } from "@/utils/HighScoreContext";
import HighscoreQuizDisplay from "./components/HighscoreQuizDisplay";
import Bonuses from "./components/Bonuses/Bonuses";

export default function Quiz() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { highscores, setHighScores } = useContext(HighScoreContext);
  const [answer, setAnswer] = useState({
    capital: "",
    country: "",
  });
  const [choices, setChoices] = useState([]);
  const [alreadyGuessed, setAlreadyGuessed] = useState([]);
  const [score, setScore] = useState(0);
  const [loose, setLoose] = useState(false);
  const countryArray = Object.keys(capitals);

  const handleChoiceClicked = useCallback(
    (v) => {
      const clicked = v.target.value;
      if (clicked === answer.capital) {
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, clicked]);
        createAnswer(countryArray, alreadyGuessed, setAnswer);
      } else {
        setLoose(true);
        setAlreadyGuessed([]);
      }
    },
    [alreadyGuessed, answer]
  );

  // // const handleFiftyFifty = (difficulty) => {
  // //   if (difficulty === "easy") {
  // //     setChoices([answer.capital, choices[0]]);
  // //     console.log(choices);
  // //   }

  //   setChoices();
  // };

  useEffect(() => {
    createAnswer(countryArray, alreadyGuessed, setAnswer);
  }, []);

  useEffect(() => {
    buildChoices(difficulty, answer, setChoices);
  }, [answer, highscores]);

  return (
    <>
      {!loose ? (
        <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4">
          <HighscoreQuizDisplay />
          <Bonuses
            setFiftyFifty={handleFiftyFifty}
            setShuffle={() => {}}
            setSkip={() => {}}
          />
          <h1 className="font-bold">What is the capital of {answer.country}</h1>
          <div>
            <QuizBoxesBuilder
              choices={choices}
              handleChoiceClicked={handleChoiceClicked}
            />
          </div>
          <div>Your streak is : {score}</div>
          <Link href="/" className="border border-black rounded p-1">
            Home Page
          </Link>
        </div>
      ) : difficulty === "easy" && score > highscores.easy.score ? (
        <NewHighScore score={score} />
      ) : difficulty === "medium" && score > highscores.medium.score ? (
        <NewHighScore score={score} />
      ) : difficulty === "hard" && score > highscores.hard.score ? (
        <NewHighScore score={score} />
      ) : (
        <Loose score={score} />
      )}
    </>
  );
}
