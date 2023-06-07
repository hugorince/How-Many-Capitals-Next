import { supabase } from "../../supabase";

export const fetchHighScores = async (setHighScores) => {
  const { data, error } = await supabase
    .from("highscores")
    .select("score, name, difficulty")
    .order("score", { ascending: false });

  const easy = data.filter((item) => item.difficulty === "easy");
  const medium = data.filter((item) => item.difficulty === "medium");
  const hard = data.filter((item) => item.difficulty === "hard");

  setHighScores(() => {
    return {
      easy: {
        name: easy[0].name,
        score: easy[0].score,
      },
      medium: {
        name: medium[0].name,
        score: medium[0].score,
      },
      hard: {
        name: hard[0].name,
        score: hard[0].score,
      },
    };
  });
};

type insertScoreTypes = {
  score: number;
  name: string;
  difficulty: string;
};

export const insertScore = async ({
  score,
  name,
  difficulty,
}: insertScoreTypes) => {
  const { data, error } = await supabase
    .from("highscores")
    .insert([{ name: name, score: score, difficulty: difficulty }]);

  console.log("error => ", error);
  console.log("data => ", data);
};