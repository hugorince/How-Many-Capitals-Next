import QuizBox from "./QuizBox";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

type QuizBoxBuilderProps = {
  choices: string[];
  handleChoiceClicked: any;
};

export default function QuizBoxesBuilder({
  choices,
  handleChoiceClicked,
}: QuizBoxBuilderProps) {
  const { buttonRef } = useContext(AppContext);
  return (
    <>
      <div className="flex flex-col space-y-2" ref={buttonRef}>
        {choices.map((item: string) => {
          return (
            <>
              <QuizBox value={item} handleChoiceClicked={handleChoiceClicked} />
            </>
          );
        })}
      </div>
    </>
  );
}
