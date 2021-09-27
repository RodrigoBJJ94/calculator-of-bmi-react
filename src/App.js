import React, { useState } from 'react';
import TableImc from './components/TableImc';
import FunctionWeight from './components/FunctionWeight';
import FunctionHeight from './components/FunctionHeight';
import Calculate from './components/Calculate';
import Result from './components/Result';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  const tableImc = () => {
    return (
      <TableImc />
    );
  };

  const fWeight = (wgt, setWgt) => {
    return (
      <FunctionWeight wgt={wgt} setWgt={setWgt} />
    );
  };

  const fHeight = (hgt, setHgt) => {
    return (
      <FunctionHeight hgt={hgt} setHgt={setHgt} />
    );
  };

  const calculate = (wgt, hgt, setRes) => {
    const calc = () => {
      setRes(wgt / (hgt * hgt));
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
    <div>
      {fWeight(weight, setWeight)}
      {fHeight(height, setHeight)}
      {calculate(weight, height, setResult)}
      {fResult(result)}
      {tableImc()}
    </div>
  );
};