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

export default function Bonuses({
  bonus,
  setFifty,
  setSkip,
  setShuffle,
}: BonusesProps) {
  return (
    <>
      <div className="flex space-x-2">
        <FiftyFifty setFifty={setFifty} bonus={bonus} />
        <Shuffle setShuffle={setShuffle} bonus={bonus} />
        <Skip setSkip={setSkip} bonus={bonus} />
      </div>
    </>
  );
}
