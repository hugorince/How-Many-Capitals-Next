export default function Shuffle({ setShuffle, bonus }) {
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
