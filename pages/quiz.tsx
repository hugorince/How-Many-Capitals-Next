import { type MouseEvent, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import QuizOptionsBuilder from "../libs/components/quiz/QuizOptionsBuilder";
import { createAnswer, buildChoices } from "../libs/components/quiz/quizLogic";
import HighscoreQuizDisplay from "../libs/components/highscores/HighscoreQuizDisplay";
import { Bonuses } from "../libs/components/bonuses";
import { handleFiftyFifty } from "../libs/utils";
import { resetButtonVisibility } from "../libs/utils/resetButtonVisibility";
import Router from "next/router";
import { useGlobalContext } from "../libs/providers/global-context";
import SubmitGuessButton from "../libs/components/quiz/SubmitGuess";
import { goodAnswerStyle } from "../libs/components/quiz/goodAnswerStyle";

const Quiz = () => {
  const {
    difficulty,
    highscores,
    score,
    setScore,
    buttonRef,
    bonusRef,
    submitGuessButtonRef,
  } = useGlobalContext();

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
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLButtonElement;
      setGuess(target.value);
      submitGuessButtonRef.current.style.pointerEvents = "auto";
    },
    [alreadyGuessed, answer]
  );

  const submitGuess = () => {
    if (submitGuessButtonContent === "Submit" && guess !== "") {
      const arr = Array.prototype.slice.call(buttonRef.current.childNodes);
      const clicked = arr.filter((e: HTMLElement) => e.id === guess)[0];
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
          setBonus((prev) => ({ ...prev, skip: true }));
        }}
        setShuffle={() => setBonus((prev) => ({ ...prev, shuffle: true }))}
      />
      <h1 className="font-bold">
        What is the capital of{" "}
        <span className="underline decoration-blue-500">{answer.country}</span>{" "}
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
  );
};

export default Quiz;
