import { capitals, cities } from "./citiesData";
import shuffle from "../../utils/shuffle";

const countryArray: string[] = Object.keys(capitals);
const capitalsArray: string[] = Object.values(capitals);
const allCities: string[] = [...cities, ...capitalsArray];

type createAnswerTypes = {
  alreadyGuessed: string[];
  setAnswer: React.Dispatch<
    React.SetStateAction<{
      capital: string;
      country: string;
    }>
  >;
};

export const createAnswer = ({
  alreadyGuessed,
  setAnswer,
}: createAnswerTypes) => {
  const country = countryArray[Math.floor(Math.random() * countryArray.length)];
  if (!alreadyGuessed.includes(capitals[country])) {
    setAnswer(() => {
      return {
        country: country,
        capital: capitals[country],
      };
    });
  } else {
    createAnswer({
      alreadyGuessed,
      setAnswer,
    });
  }
};

type buildChoicesTypes = {
  difficulty: string;
  answer: {
    capital: string;
  };
  setChoices: React.Dispatch<React.SetStateAction<string[]>>;
};

export const buildChoices = ({
  difficulty,
  answer,
  setChoices,
}: buildChoicesTypes) => {
  const cities2 = shuffle([...allCities]);
  if (difficulty === "beginner") {
    const choicesTemp = [answer.capital, cities2[0], cities2[1], cities2[2]];
    const finalChoices = shuffle([...choicesTemp]);
    setChoices([
      finalChoices[0],
      finalChoices[1],
      finalChoices[2],
      finalChoices[3],
    ]);
  } else if (difficulty === "intermediate") {
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
  } else if (difficulty === "expert") {
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
