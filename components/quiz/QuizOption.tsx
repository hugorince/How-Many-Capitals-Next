import { motion } from "framer-motion";
import shuffle from "../../utils/shuffle";

type QuizBoxProps = {
  value: string;
  handleChoiceClicked: (v: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuizOption = ({ value, handleChoiceClicked }: QuizBoxProps) => {
  return (
    <div id={value} key={value}>
      <motion.button
        className="border border-black p-1 rounded sm:hover:bg-black sm:hover:text-white shadow-sm focus:bg-black focus:text-white"
        onClick={(value) => handleChoiceClicked(value)}
        value={value}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 0.7,
          delay: shuffle([0.1, 0.2, 0.3])[0],
        }}
      >
        {value}
      </motion.button>
    </div>
  );
};

export default QuizOption;
