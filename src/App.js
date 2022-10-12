import React, { useState } from "react";
import Title from "./components/Title/Title";
import Weight from "./components/Weight/Weight";
import Height from "./components/Height/Height";
import Calculate from "./components/Calculate/Calculate";
import Result from "./components/Result/Result";
import Table from "./components/Table/Table/Table";
import "./App.css";

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="app-container">
      <Title />
      <Weight
        weigth={weight}
        setWeight={setWeight}
      />
      <Height
        height={height}
        setHeight={setHeight}
      />
      <Calculate
        weight={weight}
        height={height}
        setResult={setResult}
      />
      <Result
        result={result} />
      <Table />
    </div>
  );
};
