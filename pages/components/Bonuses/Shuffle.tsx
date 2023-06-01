type ShuffleProps = {
  bonus: {
    shuffle: boolean;
  };
  setShuffle: () => void;
};

export default function Shuffle({ setShuffle, bonus }: ShuffleProps) {
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
}
