import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import "../../Styles.css";

export default function Weight() {

  const { weigth, setWeight } = useContextAPI();

  return (
    <div className="weightAndHeightContainer">
      <label
        className="label">
        Weight (kg):
      </label>
      <input
        className="input"
        type="number"
        value={weigth}
        onChange={(element) => setWeight(element.target.value)}
      />
    </div>
  );
};
