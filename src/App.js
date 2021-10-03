import React, { useState } from 'react';
import './App.css';
import TableBmi from './components/TableBmi';
import Weight from './components/Weight';
import Height from './components/Height';
import Calculate from './components/Calculate';
import Result from './components/Result';
import Title from './components/Title';
import Main from './components/Main';
import swal from 'sweetalert';

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
      if (wgt === 0 || wgt === '') {
        swal('Please, inform the weight!');
      } else if (hgt === 0 || hgt === '') {
        swal('Please, inform the height!');
      } else {
        setRes(wgt / ((hgt * hgt) / 10000));
      };
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
      <Main fWeight={fWeight} weight={weight} setWeight={setWeight}
        fHeight={fHeight} height={height} setHeight={setHeight} calculate={calculate}
        setResult={setResult} fResult={fResult} result={result} tableImc={tableImc} />
    </div>
  );
};
