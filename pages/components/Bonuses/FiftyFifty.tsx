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
        <BsCircleHalf onClick={setFifty} size={24} />
      </>
    );
  } else
    return (
      <>
        <BsCircleHalf size={24} className="text-red-500 opacity-50" />
      </>
    );
};

export default FiftyFifty;
