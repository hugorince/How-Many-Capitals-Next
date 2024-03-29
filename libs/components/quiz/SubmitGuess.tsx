import { useState } from "react";
import { useGlobalContext } from "../../providers/global-context";

type SubmitGuessProps = {
  submitGuess: () => void;
  submitGuessButtonContent: string;
};

const SubmitGuessButton = ({
  submitGuess,
  submitGuessButtonContent,
}: SubmitGuessProps) => {
  const { submitGuessButtonRef } = useGlobalContext();

  const [effect, setEffect] = useState(false);

  return (
    <button
      className={`${
        effect && "animate-wiggle"
      }  p-4 border border-black rounded`}
      ref={submitGuessButtonRef}
      onClick={() => {
        submitGuess();
        setEffect(true);
      }}
      onAnimationEnd={() => setEffect(false)}
    >
      {submitGuessButtonContent}
    </button>
  );
};

export default SubmitGuessButton;
