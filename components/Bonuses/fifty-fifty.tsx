import { BsCircleHalf } from "react-icons/bs";

type FiftyFiftyProps = {
  bonus: {
    fifty: boolean;
  };
  setFifty: () => void;
};

export const FiftyFifty = ({ bonus, setFifty }: FiftyFiftyProps) => {
  if (bonus.fifty === false) {
    return (
      <div className="flex flex-col items-center space-y-1 transform active:scale-75 transition-transform">
        <BsCircleHalf onClick={setFifty} size={24} className="cursor-pointer" />
        <p className="text-xs">50 / 50</p>
      </div>
    );
  } else
    return (
      <div className="flex flex-col items-center text-red-700 opacity-80 space-y-1">
        <BsCircleHalf size={24} />
        <p className="text-xs">50 / 50</p>
      </div>
    );
};
