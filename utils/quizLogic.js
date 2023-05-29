import { capitals, cities } from "@/utils/citiesData";
import shuffle from "./shuffle";

const countryArray = Object.keys(capitals);
const capitalsArray = Object.values(capitals);
const allCities = [...cities, ...capitalsArray];

export const createAnswer = (countryArray, alreadyGuessed, setAnswer) => {
  const country = countryArray[Math.floor(Math.random() * countryArray.length)];
  if (!alreadyGuessed.includes(capitals[country])) {
    setAnswer(() => {
      return {
        country: country,
        capital: capitals[country],
      };
    });
  } else {
    createAnswer();
  }
};

export const buildChoices = (difficulty, answer, setChoices) => {
  const cities2 = shuffle([...allCities]);
  if (difficulty === "easy") {
    const choicesTemp = [answer.capital, cities2[0], cities2[1], cities2[2]];
    const finalChoices = shuffle([...choicesTemp]);
    setChoices([
      finalChoices[0],
      finalChoices[1],
      finalChoices[2],
      finalChoices[3],
    ]);
  } else if (difficulty === "medium") {
    const choicesTemp = [
      answer.capital,
      cities2[0],
      cities2[1],
      cities2[2],
      cities2[3],
      cities2[4],
    ];
    const finalChoices = shuffle([...choicesTemp]);
    setChoices([
      finalChoices[0],
      finalChoices[1],
      finalChoices[2],
      finalChoices[3],
      finalChoices[4],
      finalChoices[5],
    ]);
  } else if (difficulty === "hard") {
    const choicesTemp = [
      answer.capital,
      cities2[0],
      cities2[1],
      cities2[2],
      cities2[3],
      cities2[4],
      cities2[5],
      cities2[6],
    ];
    const finalChoices = shuffle([...choicesTemp]);
    setChoices([
      finalChoices[0],
      finalChoices[1],
      finalChoices[2],
      finalChoices[3],
      finalChoices[4],
      finalChoices[5],
      finalChoices[6],
      finalChoices[7],
    ]);
  }
};
