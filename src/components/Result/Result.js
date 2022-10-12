import React from "react";
import "./Styles.css";

export default function Result({ result }) {
  return (
    <div className="result-container">
      <p className="result-text">
        {result !== 0 ? `Result: ${result.toFixed(2)}` : ""}
      </p>
    </div>
  );
};
