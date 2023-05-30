export default function QuizBox({ value, handleChoiceClicked }) {
  return (
    <>
      <button
        className="border border-black p-1 rounded sm:hover:bg-black sm:hover:text-white shadow-sm"
        onClick={(value) => handleChoiceClicked(value)}
        value={value}
      >
        {value}
      </button>
    </>
  );
}