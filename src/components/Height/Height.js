import React from "react";
import "./Styles.css";

export default function Height({ height, setHeight }) {
  return (
    <div className="height-container">
      <label
        className="height-label">
        Height (cm):
      </label>
      <input
        className="height-input"
        type="number"
        value={height}
        onChange={(element) => setHeight(element.target.value)}
      />
    </div>
  );
};
