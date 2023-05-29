import "@/styles/globals.css";
import { useState } from "react";
import { DifficultyContext } from "./components/DifficultyContext";

export default function App({ Component, pageProps }) {
  const [difficulty, setDifficulty] = useState("easy");
  return (
    <>
      <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
        <Component {...pageProps} />
      </DifficultyContext.Provider>
    </>
  );
}
