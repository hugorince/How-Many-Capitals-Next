import shuffle from "../../../utils/shuffle";

type handleFiftyFiftyTypes = {
  difficulty: string;
  answer: {
    capital: string;
  };
  setBonus: any;
  bonus: {
    fifty: boolean;
    skip: boolean;
    shuffle: boolean;
  };
  buttonRef: any;
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
  if (difficulty === "easy") {
    diffNum = 2;
  } else if (difficulty === "medium") {
    diffNum = 3;
  } else if (difficulty === "hard") {
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
