import shuffle from "./shuffle";

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
};

export const handleFiftyFifty = ({
  difficulty,
  answer,
  setBonus,
  bonus,
}: handleFiftyFiftyTypes) => {
  const elements: NodeListOf<Element> =
    document.querySelectorAll(".button-question");
  const elementsArray: { id: string; style: { visibility: string } }[] =
    Array.prototype.slice.call(elements);
  const elementsShuffled: { id: string; style: { visibility: string } }[] =
    shuffle(elementsArray);
  let diffNum: number = 0;
  let hidden: number = 0;
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
