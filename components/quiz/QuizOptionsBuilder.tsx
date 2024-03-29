import { useContext } from "react";
import { AppContext } from "../../pages/context/AppContext";
import QuizOption from "./QuizOption";

type QuizOptionsBuilderProps = {
  choices: string[];
  handleChoiceClicked: (v: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuizOptionsBuilder = ({
  choices,
  handleChoiceClicked,
}: QuizOptionsBuilderProps) => {
  const { buttonRef } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col space-y-2 items-center" ref={buttonRef}>
        {choices.map((item: string) => {
          return (
            <QuizOption
              value={item}
              handleChoiceClicked={handleChoiceClicked}
            />
          );
        })}
      </div>
    </>
  );
};

export default QuizOptionsBuilder;
