import Link from "next/link";
import QuizBoxesBuilder from "./components/quiz/QuizBoxBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { DifficultyContext } from "./components/difficulty/DifficultyContext";
import { createAnswer, buildChoices } from "./components/quiz/quizLogic";
import { HighScoreContext } from "./components/highscores/HighScoreContext";
import HighscoreQuizDisplay from "./components/highscores/HighscoreQuizDisplay";
import Bonuses from "./components/Bonuses/Bonuses";
import { handleFiftyFifty } from "./components/Bonuses/bonusesLogic";
import { setVisibility } from "../utils/setVisibility";
import { useRouter } from "next/router";
import { ScoreContext } from "./components/quiz/ScoreContext";

export default function Quiz() {
  const router = useRouter();
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { highscores, setHighScores } = useContext(HighScoreContext);
  const { score, setScore } = useContext(ScoreContext);

  const [answer, setAnswer] = useState({
    capital: "",
    country: "",
  });
  const [choices, setChoices] = useState<string[]>([]);
  const [alreadyGuessed, setAlreadyGuessed] = useState<string[]>([]);
  const [bonus, setBonus] = useState({
    fifty: false,
    skip: false,
    shuffle: false,
  });

  const handleChoiceClicked = useCallback(
    (v) => {
      const clicked = v.target.value;
      if (clicked === answer.capital) {
        setVisibility();
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, clicked]);
        createAnswer({ alreadyGuessed, setAnswer });
      } else {
        setAlreadyGuessed([]);
        router.push("/gameOver");
      }
    },
    [alreadyGuessed, answer]
  );

  useEffect(() => {
    createAnswer({ alreadyGuessed, setAnswer });
  }, [bonus.skip]);

  useEffect(() => {
    buildChoices({ difficulty, answer, setChoices });
  }, [answer, highscores, bonus.shuffle]);

  return (
    <>
      <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4">
        <HighscoreQuizDisplay />
        <Bonuses
          bonus={bonus}
          setFifty={() => {
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
        <Link href="/gameOver" className="border border-black rounded p-1">
          End Game
        </Link>
      </div>
    </>
  );
}
