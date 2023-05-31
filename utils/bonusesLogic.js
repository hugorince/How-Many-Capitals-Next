import shuffle from "@/utils/shuffle";

export const handleFiftyFifty = (
  difficulty,
  choices,
  setChoices,
  setBonus,
  bonus,
  answer
) => {
  const newChoices = choices.filter((choice) => choice !== answer.capital);
  const shuffledNewChoices = shuffle(newChoices);
  if (difficulty === "easy") {
    setChoices(() => shuffle([answer.capital, shuffledNewChoices[0]]));
  } else if (difficulty === "medium") {
    setChoices(() =>
      shuffle([answer.capital, shuffledNewChoices[0], shuffledNewChoices[1]])
    );
  } else if (difficulty === "hard") {
    setChoices(() =>
      shuffle([
        answer.capital,
        shuffledNewChoices[0],
        shuffledNewChoices[1],
        shuffledNewChoices[2],
      ])
    );
  }
  setBonus({
    fifty: true,
    skip: bonus.skip,
    shuffle: bonus.shuffle,
  });
};

// export const handleSkip = (setBonus) => {};
