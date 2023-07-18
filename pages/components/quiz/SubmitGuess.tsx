import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

type SubmitGuessProps = {
  submitGuess: any;
  submitButton: string;
};

const SubmitGuess = ({ submitGuess, submitButton }: SubmitGuessProps) => {
  const { submitButtonRef } = useContext(AppContext);

  return (
    <button
      className="border border-black rounded p-2"
      ref={submitButtonRef}
      onClick={submitGuess}
    >
      {submitButton}
    </button>
  );
};

export default SubmitGuess;
