import QuizBox from "./QuizBox";

export default function QuizBoxesBuilder({ choices, handleChoiceClicked }) {
  return (
    <>
      <div className="flex flex-col space-y-2">
        {choices.map((item, i) => {
          return (
            <>
              <QuizBox
                value={item}
                handleChoiceClicked={handleChoiceClicked}
                key={i}
              />
            </>
          );
        })}
      </div>
    </>
  );
}