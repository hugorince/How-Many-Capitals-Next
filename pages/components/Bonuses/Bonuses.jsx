import FiftyFifty from "./FiftyFifty";
import Shuffle from "./Shuffle";
import Skip from "./Skip";

export default function Bonuses({
  fiftyFifty,
  setFiftyFifty,
  setShuffle,
  setSkip,
}) {
  return (
    <>
      <div className="flex space-x-2">
        <FiftyFifty setFiftyFifty={setFiftyFifty} fiftyFifty={fiftyFifty} />
        <Shuffle setShuffle={setShuffle} />
        <Skip setSkip={setSkip} />
      </div>
    </>
  );
}
