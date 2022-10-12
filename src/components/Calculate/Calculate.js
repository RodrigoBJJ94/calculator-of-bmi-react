import React from "react";
import Swal from "sweetalert2";
import "./Styles.css";

export default function Calculate({ weight, height, setResult }) {
  const calc = () => {
    if ((weight === 0 || weight === "") && (height === 0 || height === "")) {
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
        className="button-calculate"
        onClick={calc}>
        Calculate
      </button>
    </div>
  );
};
