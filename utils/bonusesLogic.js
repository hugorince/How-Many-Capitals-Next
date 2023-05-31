import shuffle from "@/utils/shuffle";

// export const handleFiftyFifty = (
//   difficulty,
//   choices,
//   setChoices,
//   setBonus,
//   bonus,
//   answer
// ) => {
//   const newChoices = choices.filter((choice) => choice !== answer.capital);
//   const shuffledNewChoices = shuffle(newChoices);
//   if (difficulty === "easy") {
//     setChoices(() => shuffle([answer.capital, shuffledNewChoices[0]]));
//   } else if (difficulty === "medium") {
//     setChoices(() =>
//       shuffle([answer.capital, shuffledNewChoices[0], shuffledNewChoices[1]])
//     );
//   } else if (difficulty === "hard") {
//     setChoices(() =>
//       shuffle([
//         answer.capital,
//         shuffledNewChoices[0],
//         shuffledNewChoices[1],
//         shuffledNewChoices[2],
//       ])
//     );
//   }
//   setBonus({
//     fifty: true,
//     skip: bonus.skip,
//     shuffle: bonus.shuffle,
//   });
// };

export const handleFiftyFifty = (difficulty, answer, setBonus, bonus) => {
  const elements = document.querySelectorAll(".button-question");
  const elementsArray = Array.prototype.slice.call(elements);
  const elementsShuffled = shuffle(elementsArray);
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
