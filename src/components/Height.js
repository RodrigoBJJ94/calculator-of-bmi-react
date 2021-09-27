import React from 'react';

export default function Height(props) {
    return (
        <div className="div-height">
        <label>Height (cm): </label>
        <input
          type="text"
          value={props.hgt}
          size="3"
          onChange={(element) => props.setHgt(element.target.value)}
        />
      </div>
    );
};