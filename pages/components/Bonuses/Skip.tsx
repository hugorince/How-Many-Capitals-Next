import { BsFillSkipForwardFill } from "react-icons/bs";

type SkipProps = {
  bonus: {
    skip: boolean;
  };
  setSkip: () => void;
};

const Skip = ({ bonus, setSkip }: SkipProps) => {
  if (bonus.skip === false) {
    return (
      <>
        <BsFillSkipForwardFill onClick={setSkip} size={24} />
      </>
    );
  } else
    return (
      <>
        <BsFillSkipForwardFill size={24} className="text-red-500 opacity-50" />
      </>
    );
};
export default Skip;
