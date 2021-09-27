import React, { useState } from 'react';
import TableBmi from './components/TableBmi';
import Weight from './components/Weight';
import Height from './components/Height';
import Calculate from './components/Calculate';
import Result from './components/Result';
import Title from './components/Title';
import './App.css';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const tableImc = () => {
    return (
      <TableBmi />
    );
  };

  const fWeight = (wgt, setWgt) => {
    return (
      <Weight wgt={wgt} setWgt={setWgt} />
    );
  };

  const fHeight = (hgt, setHgt) => {
    return (
      <Height hgt={hgt} setHgt={setHgt} />
    );
  };

  const calculate = (wgt, hgt, setRes) => {
    const calc = () => {
      setRes(wgt / ((hgt * hgt) / 10000));
    };

    return (
      <Calculate calc={calc} />
    );
  };

  const fResult = (res) => {
    return (
      <Result res={res} />
    );
  };

  return (
    <div className="div-app">
      <Title />
      {fWeight(weight, setWeight)}
      {fHeight(height, setHeight)}
      {calculate(weight, height, setResult)}
      {fResult(result)}
      {tableImc()}
    </div>
  );
};