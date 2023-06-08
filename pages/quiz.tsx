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
      const clicked = v.target.value;
      if (clicked === answer.capital) {
        resetButtonVisibility(buttonRef);
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, clicked]);
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
      <div className="flex flex-col space-y-8 h-screen w-screen items-center place-content-center p-4">
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
        <h1 className="font-bold">What is the capital of {answer.country}</h1>
        <div>
          <QuizOptionsBuilder
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
};

export default Quiz;
