import Link from "next/link";
import QuizBoxBuilder from "./components/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "./components/DifficultyContext";
import { capitals, cities } from "@/utils/citiesData";
import Loose from "./components/loose";
import { createAnswer, buildChoices } from "@/utils/quizLogic";

export default function Quiz() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
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
  }, [answer]);

  return (
    <>
      {!loose ? (
        <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center">
          <h1 className="font-bold">What is the capital of {answer.country}</h1>
          <div>
            <QuizBoxBuilder
              choices={choices}
              handleChoiceClicked={handleChoiceClicked}
            />
          </div>
          <div>Your streak is : {score}</div>
          <Link href="/">Home Page</Link>
        </div>
      ) : (
        <Loose score={score} />
      )}
    </>
  );
}
