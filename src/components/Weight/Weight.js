import React from "react";
import "./Styles.css";

export default function Weight({ weigth, setWeight }) {
  return (
    <div className="weight-container">
      <label
        className="weight-label">
        Weight (kg):
      </label>
      <input
        className="weight-input"
        type="number"
        value={weigth}
        onChange={(element) => setWeight(element.target.value)}
      />
    </div>
  );
};
