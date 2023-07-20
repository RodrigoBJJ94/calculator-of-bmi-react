import React from "react";
import { useContextAPI } from "../../context/ContextAPI";
import "../../Styles.css";

export default function Height() {

  const { height, setHeight } = useContextAPI();

  return (
    <div className="weightAndHeightContainer">
      <label
        className="label">
        Height (cm):
      </label>
      <input
        className="input"
        type="number"
        value={height}
        onChange={(element) => setHeight(element.target.value)}
      />
    </div>
  );
};
