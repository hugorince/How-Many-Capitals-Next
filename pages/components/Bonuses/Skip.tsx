type SkipProps = {
  bonus: {
    skip: boolean;
  };
  setSkip: () => void;
};

const Skip = ({ bonus, setSkip }: SkipProps) => {
  if (bonus.skip === false) {
    return (
      <>
        <button onClick={setSkip}>skip</button>
      </>
    );
  } else
    return (
      <>
        <button className="text-red-500">skip</button>
      </>
    );
};
export default Skip;
