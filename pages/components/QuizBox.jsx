export default function QuizBox({ value, handleChoiceClicked }) {
  return (
    <>
      <button
        className="border border-black p-2 rounded hover:bg-black hover:text-white"
        onClick={(value) => handleChoiceClicked(value)}
        value={value}
        key={value}
      >
        {value}
      </button>
    </>
  );
}
