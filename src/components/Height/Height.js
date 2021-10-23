import React from 'react';
import './Styles.css';

export default function Height({ height, setHeight }) {
  return (
    <div className="div-height">
      <label>Height (cm): </label>
      <input
        type="text"
        value={height}
        size="3"
        onChange={(element) => setHeight(element.target.value)} />
    </div>
  );
};
