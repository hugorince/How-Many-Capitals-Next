import Link from "next/link";
import QuizOptionsBuilder from "./components/quiz/QuizOptionsBuilder";
import { useState, useContext, useEffect, useCallback } from "react";
import { createAnswer, buildChoices } from "./components/quiz/quizLogic";
import HighscoreQuizDisplay from "./components/highscores/HighscoreQuizDisplay";
import Bonuses from "./components/Bonuses/Bonuses";
import { handleFiftyFifty } from "./components/Bonuses/bonusesLogic";
import { resetButtonVisibility } from "../utils/resetButtonVisibility";
import Router from "next/router";
import { AppContext } from "./context/AppContext";
import SubmitGuessButton from "./components/quiz/SubmitGuess";
import { goodAnswerStyle } from "./components/quiz/goodAnswerStyle";

const Quiz = () => {
  const {
    difficulty,
    setDifficulty,
    highscores,
    setHighScores,
    score,
    setScore,
    buttonRef,
    bonusRef,
    submitGuessButtonRef,
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
  const [guess, setGuess] = useState("");
  const [submitGuessButtonContent, setSubmitGuessButtonContent] =
    useState("Submit");

  const handleChoiceClicked = useCallback(
    (v: any) => {
      setGuess(v.target.value);
      submitGuessButtonRef.current.style.pointerEvents = "auto";
    },
    [alreadyGuessed, answer]
  );

  const submitGuess = () => {
    if (submitGuessButtonContent === "Submit" && guess !== "") {
      const arr = Array.prototype.slice.call(buttonRef.current.childNodes);
      const clicked = arr.filter((e: any) => e.id === guess)[0];
      if (clicked.id === answer.capital) {
        bonusRef.current.style.pointerEvents = "none";
        buttonRef.current.style.pointerEvents = "none";
        goodAnswerStyle(clicked);
        setScore(score + 1);
        setAlreadyGuessed((prev) => [...prev, guess]);
        setSubmitGuessButtonContent("Next Question");
      } else {
        setAlreadyGuessed([]);
        Router.push("/gameover");
      }
    } else {
      resetButtonVisibility(buttonRef);
      bonusRef.current.style.pointerEvents = "auto";
      buttonRef.current.style.pointerEvents = "auto";
      createAnswer({ alreadyGuessed, setAnswer });
      setSubmitGuessButtonContent("Submit");
    }
  };

  useEffect(() => {
    createAnswer({ alreadyGuessed, setAnswer });
  }, [bonus.skip]);

  useEffect(() => {
    buildChoices({ difficulty, answer, setChoices });
    submitGuessButtonRef.current.style.pointerEvents = "none";
  }, [answer, highscores, bonus.shuffle]);

  return (
    <>
      <div className="flex flex-col space-y-8 w-screen h-screen items-center justify-center p-4">
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
          </span>{" "}
          ?
        </h1>
        <QuizOptionsBuilder
          choices={choices}
          handleChoiceClicked={handleChoiceClicked}
        />
        <SubmitGuessButton
          submitGuessButtonContent={submitGuessButtonContent}
          submitGuess={submitGuess}
        />
        <h2 className="font-bold">
          current score : <span className="text-xl">{score}</span>
        </h2>
        <HighscoreQuizDisplay />
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
