import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import QuizOption from "./QuizOption";

type QuizOptionsBuilderProps = {
  choices: string[];
  handleChoiceClicked: any;
};

const QuizOptionsBuilder = ({
  choices,
  handleChoiceClicked,
}: QuizOptionsBuilderProps) => {
  const { buttonRef } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col space-y-2" ref={buttonRef}>
        {choices.map((item: string) => {
          return (
            <>
              <QuizOption
                value={item}
                handleChoiceClicked={handleChoiceClicked}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default QuizOptionsBuilder;
