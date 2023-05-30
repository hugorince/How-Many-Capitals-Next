import Link from "next/link";
import QuizBoxesBuilder from "./components/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "../utils/DifficultyContext";
import { capitals } from "@/utils/citiesData";
import { createAnswer, buildChoices } from "@/utils/quizLogic";
import Loose from "./components/Loose";
import { fetchHighScores } from "./api/crud";
import NewHighScore from "./components/NewHighScore";
import { HighScoreContext } from "@/utils/HighScoreContext";

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
      }
    },
    [alreadyGuessed, answer]
  );

  useEffect(() => {
    createAnswer(countryArray, alreadyGuessed, setAnswer);
  }, []);

  useEffect(() => {
    buildChoices(difficulty, answer, setChoices);
  }, [answer, highscores]);

  return (
    <>
      {!loose ? (
        <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center">
          <div>
            Highscore in {difficulty} is {highscores.easy.score} by{" "}
            {highscores.easy.name}
          </div>
          <h1 className="font-bold">What is the capital of {answer.country}</h1>
          <div>
            <QuizBoxesBuilder
              choices={choices}
              handleChoiceClicked={handleChoiceClicked}
            />
          </div>
          <div>Your streak is : {score}</div>
          <Link href="/">Home Page</Link>
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
