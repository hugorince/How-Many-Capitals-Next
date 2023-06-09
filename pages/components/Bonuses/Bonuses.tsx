import FiftyFifty from "./FiftyFifty";
import Shuffle from "./Shuffle";
import Skip from "./Skip";

type BonusesProps = {
  bonus: {
    fifty: boolean;
    shuffle: boolean;
    skip: boolean;
  };
  setFifty: () => void;
  setSkip: () => void;
  setShuffle: () => void;
};

const Bonuses = ({ bonus, setFifty, setSkip, setShuffle }: BonusesProps) => {
  return (
    <>
      <div className="border border-black rounded p-4 relative">
        <h1 className="absolute bottom-[3.9rem] bg-white p-1">Bonus</h1>
        <div className="flex space-x-12 justify-center">
          <FiftyFifty setFifty={setFifty} bonus={bonus} />
          <Shuffle setShuffle={setShuffle} bonus={bonus} />
          <Skip setSkip={setSkip} bonus={bonus} />
        </div>
      </div>
    </>
  );
};

export default Bonuses;
