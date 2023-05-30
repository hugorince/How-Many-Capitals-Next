export default function FiftyFifty({ fiftyFifty, setFiftyFifty }) {
  if (fiftyFifty === false) {
    return (
      <>
        <button onClick={setFiftyFifty}>50/50</button>
      </>
    );
  } else
    return (
      <>
        <button className="text-red-500">50/50</button>
      </>
    );
}
