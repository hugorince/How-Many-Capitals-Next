import { useContext } from "react";
import { FiftyFifty } from "./fifty-fifty";
import { Shuffle } from "./shuffle";
import { Skip } from "./skip";
import { AppContext } from "../../pages/context/AppContext";

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

export const Bonuses = ({
  bonus,
  setFifty,
  setSkip,
  setShuffle,
}: BonusesProps) => {
  const { bonusRef } = useContext(AppContext);

  return (
    <>
      <div className="border border-black rounded p-4 relative" ref={bonusRef}>
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
