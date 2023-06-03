import Link from "next/link";
import QuizBoxesBuilder from "./components/quiz/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "./components/difficulty/DifficultyContext";
import { capitals } from "./components/quiz/citiesData";
import { createAnswer, buildChoices } from "./components/quiz/quizLogic";
import Loose from "./components/quiz/Loose";
import NewHighScore from "./components/highscores/NewHighScore";
import { HighScoreContext } from "./components/highscores/HighScoreContext";
import HighscoreQuizDisplay from "./components/highscores/HighscoreQuizDisplay";
import Bonuses from "./components/Bonuses/Bonuses";
import { handleFiftyFifty } from "./components/Bonuses/bonusesLogic";
import { setVisibility } from "../utils/setVisibility";

export default function Quiz() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { highscores, setHighScores } = useContext(HighScoreContext);
  const [answer, setAnswer] = useState<{ capital: string; country: string }>({
    capital: "",
    country: "",
  });
  const [choices, setChoices] = useState<string[]>([]);
  const [alreadyGuessed, setAlreadyGuessed] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [bonus, setBonus] = useState<{
    fifty: boolean;
    skip: boolean;
    shuffle: boolean;
  }>({
    fifty: false,
    skip: false,
    shuffle: false,
  });
  const [loose, setLoose] = useState(false);
  const countryArray = Object.keys(capitals);

  const handleChoiceClicked = useCallback(
    (v) => {
      const clicked = v.target.value;
      if (clicked === answer.capital) {
        setVisibility();
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, clicked]);
        createAnswer({ countryArray, alreadyGuessed, setAnswer });
      } else {
        setLoose(true);
        setAlreadyGuessed([]);
      }
    },
    [alreadyGuessed, answer]
  );

  useEffect(() => {
    createAnswer({ countryArray, alreadyGuessed, setAnswer });
  }, [bonus.skip]);

  useEffect(() => {
    buildChoices({ difficulty, answer, setChoices });
  }, [answer, highscores, bonus.shuffle]);

  return (
    <>
      {!loose ? (
        <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4">
          <HighscoreQuizDisplay />
          <Bonuses
            bonus={bonus}
            setBonus={() => {
              handleFiftyFifty({ difficulty, answer, setBonus, bonus });
            }}
            setSkip={() => {
              setVisibility();
              setBonus({
                fifty: bonus.fifty,
                skip: true,
                shuffle: bonus.shuffle,
              });
            }}
            setShuffle={() =>
              setBonus({
                fifty: bonus.fifty,
                skip: bonus.skip,
                shuffle: true,
              })
            }
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
