import React from "react";
import { ContextProvider } from "./context/ContextAPI";
import Main from "./screens/Main";
import "./Styles.css";

export default function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
};
