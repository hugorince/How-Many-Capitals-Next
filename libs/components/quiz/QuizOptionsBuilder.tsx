import { useGlobalContext } from "../../providers/global-context";
import QuizOption from "./QuizOption";

type QuizOptionsBuilderProps = {
  choices: string[];
  handleChoiceClicked: (v: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuizOptionsBuilder = ({
  choices,
  handleChoiceClicked,
}: QuizOptionsBuilderProps) => {
  const { buttonRef } = useGlobalContext();
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
