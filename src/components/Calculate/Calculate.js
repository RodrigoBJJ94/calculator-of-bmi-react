import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import Swal from "sweetalert2";
import "./Styles.css";

export default function Calculate() {

  const { weight, height, setResult } = useContextAPI();

  const calculate = () => {
    if (
      (weight === 0 || weight === "")
      && (height === 0 || height === "")
    ) {
      Swal.fire("Please, inform the weight and height!");
    } else if (weight === 0 || weight === "") {
      Swal.fire("Please, inform the weight!");
    } else if (height === 0 || height === "") {
      Swal.fire("Please, inform the height!");
    } else {
      setResult(weight / ((height * height) / 10000));
    };
  };

  return (
    <div>
      <button
        className="buttonCalculate"
        onClick={() => {
          calculate();
        }}>
        Calculate
      </button>
    </div>
  );
};
