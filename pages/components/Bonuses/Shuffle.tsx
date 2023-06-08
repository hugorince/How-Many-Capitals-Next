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
        <button onClick={setShuffle}>shuffle</button>
      </>
    );
  } else
    return (
      <>
        <button className="text-red-500">shuffle</button>
      </>
    );
};

export default Shuffle;
