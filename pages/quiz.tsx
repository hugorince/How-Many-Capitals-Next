import Link from "next/link";
import QuizOptionsBuilder from "./components/quiz/QuizOptionsBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { createAnswer, buildChoices } from "./components/quiz/quizLogic";
import HighscoreQuizDisplay from "./components/highscores/HighscoreQuizDisplay";
import Bonuses from "./components/Bonuses/Bonuses";
import { handleFiftyFifty } from "./components/Bonuses/bonusesLogic";
import { resetButtonVisibility } from "../utils/resetButtonVisibility";
import { useRouter } from "next/router";
import { AppContext } from "./context/AppContext";

const Quiz = () => {
  const router = useRouter();
  const {
    difficulty,
    setDifficulty,
    highscores,
    setHighScores,
    score,
    setScore,
    buttonRef,
  } = useContext(AppContext);

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
      const buttonValue = v.target.value;
      if (buttonValue === answer.capital) {
        resetButtonVisibility(buttonRef);
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, buttonValue]);
        createAnswer({ alreadyGuessed, setAnswer });
      } else {
        setAlreadyGuessed([]);
        router.push("/gameover");
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
      <div className="flex flex-col space-y-8 w-screen h-screen items-center justify-center p-4">
        <HighscoreQuizDisplay />
        <Bonuses
          bonus={bonus}
          setFifty={() => {
            handleFiftyFifty({
              difficulty,
              answer,
              setBonus,
              bonus,
              buttonRef,
            });
          }}
          setSkip={() => {
            resetButtonVisibility(buttonRef);
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
        <h1 className="font-bold">
          What is the capital of{" "}
          <span className="underline decoration-blue-500">
            {answer.country}
          </span>
        </h1>
        <div>
          <QuizOptionsBuilder
            choices={choices}
            handleChoiceClicked={handleChoiceClicked}
          />
        </div>
        <div>Your streak is : {score}</div>
        <Link
          href="/gameover"
          className="italic underline decoration-red-500 cursor-pointer bottom-8 absolute"
        >
          End game
        </Link>
      </div>
    </>
  );
};

export default Quiz;
