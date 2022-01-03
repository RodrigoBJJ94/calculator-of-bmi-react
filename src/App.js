import React, { useState } from 'react';
import './App.css';
import Title from './components/Title/Title';
import Weight from './components/Weight/Weight';
import Height from './components/Height/Height';
import Calculate from './components/Calculate/Calculate';
import Result from './components/Result/Result';
import Table from './components/Table/Table';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="div-app">
      <Title />
      <Weight
        weigth={weight} setWeight={setWeight} />
      <Height
        height={height} setHeight={setHeight} />
      <Calculate
        weight={weight} height={height} setResult={setResult} />
      <Result
        result={result} />
      <Table />
    </div>
  );
};
