export default function Skip({ bonus, setSkip }) {
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
}
