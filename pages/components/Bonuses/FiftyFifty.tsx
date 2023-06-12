import { BsCircleHalf } from "react-icons/bs";

type FiftyFiftyProps = {
  bonus: {
    fifty: boolean;
  };
  setFifty: () => void;
};

const FiftyFifty = ({ bonus, setFifty }: FiftyFiftyProps) => {
  if (bonus.fifty === false) {
    return (
      <>
        <BsCircleHalf onClick={setFifty} size={24} className="cursor-pointer" />
      </>
    );
  } else
    return (
      <>
        <BsCircleHalf size={24} className="text-red-700 opacity-80" />
      </>
    );
};

export default FiftyFifty;
