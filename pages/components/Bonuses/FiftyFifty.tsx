type FiftyFiftyProps = {
  bonus: {
    fifty: boolean;
  };
  setBonus: () => void;
};

export default function FiftyFifty({ bonus, setBonus }: FiftyFiftyProps) {
  if (bonus.fifty === false) {
    return (
      <>
        <button onClick={setBonus}>50/50</button>
      </>
    );
  } else
    return (
      <>
        <button className="text-red-500">50/50</button>
      </>
    );
}
