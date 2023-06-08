type FiftyFiftyProps = {
  bonus: {
    fifty: boolean;
  };
  setFifty: () => void;
};

const FiftyFifty = ({ bonus, setFifty }: FiftyFiftyProps) => {
  if (bonus.fifty === false) {
    return (
      <>
        <button onClick={setFifty}>50/50</button>
      </>
    );
  } else
    return (
      <>
        <button className="text-red-500">50/50</button>
      </>
    );
};

export default FiftyFifty;
