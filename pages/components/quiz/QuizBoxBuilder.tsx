import QuizBox from "./QuizBox";
import { useContext } from "react";
import { ButtonRefContext } from "./ButtonRefContext";

type QuizBoxBuilderProps = {
  choices: string[];
  handleChoiceClicked: any;
};

export default function QuizBoxesBuilder({
  choices,
  handleChoiceClicked,
}: QuizBoxBuilderProps) {
  const { buttonRef } = useContext(ButtonRefContext);
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
