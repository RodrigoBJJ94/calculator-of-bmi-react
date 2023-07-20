import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import "./Styles.css";

export default function Result() {

  const { result } = useContextAPI();

  return (
    <div className="resultContainer">
      <p className="resultText">
        {
          result !== 0
            ? `Result: ${result.toFixed(2)}`
            : ""
        }
      </p>
    </div>
  );
};
