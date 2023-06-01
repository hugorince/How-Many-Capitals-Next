import Link from "next/link";

export default function Loose({ score }) {
  return (
    <>
      <div className="flex flex-col space-y-4 place-content-center items-center h-screen w-screen">
        <div>Oh no, you've lost 😞</div>
        <div>Your score is {score}</div>
        <Link
          href={"/"}
          className="border border-black p-2 rounded hover:bg-black hover:text-white"
        >
          Play again ?
        </Link>
      </div>
    </>
  );
}
