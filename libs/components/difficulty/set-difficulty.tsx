import { DifficultyButton } from "./difficulty-button";

export const SetDifficulty = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h2 className="text-sm">set difficulty :</h2>
      <div className="flex space-x-2">
        <DifficultyButton difficultyProp="beginner" />
        <DifficultyButton difficultyProp="intermediate" />
        <DifficultyButton difficultyProp="expert" />
      </div>
    </div>
  );
};
