type QuizBoxProps = {
  value: string;
  handleChoiceClicked: (c: any) => void;
};

export default function QuizBox({ value, handleChoiceClicked }: QuizBoxProps) {
  return (
    <>
      <div className="button-question" id={value} key={value}>
        <button
          className="border border-black p-1 rounded sm:hover:bg-black sm:hover:text-white shadow-sm"
          onClick={(value) => handleChoiceClicked(value)}
          value={value}
        >
          {value}
        </button>
      </div>
    </>
  );
}
