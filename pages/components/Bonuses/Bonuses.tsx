import FiftyFifty from "./FiftyFifty";
import Shuffle from "./Shuffle";
import Skip from "./Skip";

export default function Bonuses({ bonus, setBonus, setSkip, setShuffle }) {
  return (
    <>
      <div className="flex space-x-2">
        <FiftyFifty setBonus={setBonus} bonus={bonus} />
        <Shuffle setShuffle={setShuffle} bonus={bonus} />
        <Skip setSkip={setSkip} bonus={bonus} />
      </div>
    </>
  );
}
