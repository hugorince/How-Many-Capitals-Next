import QuizBox from "./QuizBox";

export default function QuizBoxBuilder({ choices, handleChoiceClicked }) {
  return (
    <>
      <div className="flex space-x-2">
        {choices.map((item, i) => {
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
