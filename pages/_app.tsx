import React from "react";
import "./globals.css";
import { GlobalContextProvider } from "../libs/providers/global-context";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  );
};

export default App;
