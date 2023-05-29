import Link from "next/link";
import QuizBoxesBuilder from "./components/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "./components/DifficultyContext";
import { capitals } from "@/utils/citiesData";
import { createAnswer, buildChoices } from "@/utils/quizLogic";
import Loose from "./components/loose";
import { supabase } from "@/supabase";

export default function Quiz() {
  const [highscore, setHighscore] = useState({
    player: "",
    difficulty: "",
    highscore: "",
  });
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

  const fetchHighScores = async () => {
    const { data, error } = await supabase.from("highscores").select("score");
    console.log({ data });
  };

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
    fetchHighScores();
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
            <QuizBoxesBuilder
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
