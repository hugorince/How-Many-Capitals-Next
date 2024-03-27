import type { Dispatch, MutableRefObject, SetStateAction } from "react";
import shuffle from "./shuffle";
import { Difficulty } from "../pages/_app";

type handleFiftyFiftyTypes = {
  difficulty: Difficulty;
  answer: {
    capital: string;
  };
  setBonus: Dispatch<
    SetStateAction<{
      fifty: boolean;
      skip: boolean;
      shuffle: boolean;
    }>
  >;
  bonus: {
    fifty: boolean;
    skip: boolean;
    shuffle: boolean;
  };
  buttonRef: MutableRefObject<HTMLButtonElement>;
};

export const handleFiftyFifty = ({
  difficulty,
  answer,
  setBonus,
  bonus,
  buttonRef,
}: handleFiftyFiftyTypes) => {
  const elements = buttonRef.current.children;
  const elementsArray: { id: string; style: { visibility: string } }[] =
    Array.prototype.slice.call(elements);
  const elementsShuffled: { id: string; style: { visibility: string } }[] =
    shuffle(elementsArray);

  let diffNum = 0;
  let hidden = 0;
  if (difficulty === "beginner") {
    diffNum = 2;
  } else if (difficulty === "intermediate") {
    diffNum = 3;
  } else if (difficulty === "expert") {
    diffNum = 4;
  }
  while (hidden < diffNum) {
    for (let i = 0; i < elementsShuffled.length; i++) {
      if (elementsShuffled[i].id !== answer.capital && hidden < diffNum) {
        elementsShuffled[i].style.visibility = "hidden";
        hidden++;
      }
    }
  }
  setBonus({
    fifty: true,
    skip: bonus.skip,
    shuffle: bonus.shuffle,
  });
};
