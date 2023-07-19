import { ImShuffle } from "react-icons/im";
type ShuffleProps = {
  bonus: {
    shuffle: boolean;
  };
  setShuffle: () => void;
};

const Shuffle = ({ setShuffle, bonus }: ShuffleProps) => {
  if (bonus.shuffle === false) {
    return (
      <>
        <div className="flex flex-col items-center space-y-1 transform active:scale-75 transition-transform">
          <ImShuffle
            onClick={setShuffle}
            size={24}
            className="cursor-pointer"
          />
          <p className="text-xs">shuffle</p>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="flex flex-col items-center text-red-700 opacity-80 space-y-1">
          <ImShuffle size={24} className="" />
          <p className="text-xs">shuffle</p>
        </div>
      </>
    );
};

export default Shuffle;
