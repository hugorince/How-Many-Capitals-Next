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
        <ImShuffle onClick={setShuffle} size={24} className="cursor-pointer" />
      </>
    );
  } else
    return (
      <>
        <ImShuffle size={24} className="text-red-700 opacity-80" />
      </>
    );
};

export default Shuffle;
