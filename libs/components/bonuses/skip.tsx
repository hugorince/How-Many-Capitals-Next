import { BsFillSkipForwardFill } from "react-icons/bs";

type SkipProps = {
  bonus: {
    skip: boolean;
  };
  setSkip: () => void;
};

export const Skip = ({ bonus, setSkip }: SkipProps) => {
  if (bonus.skip === false) {
    return (
      <div className="flex flex-col items-center space-y-1 transform active:scale-75 transition-transform">
        <BsFillSkipForwardFill
          onClick={setSkip}
          size={24}
          className="cursor-pointer"
        />
        <p className="text-xs">skip</p>
      </div>
    );
  } else
    return (
      <div className="flex flex-col items-center text-red-700 opacity-80 space-y-1">
        <BsFillSkipForwardFill size={24} />
        <p className="text-xs">skip</p>
      </div>
    );
};
