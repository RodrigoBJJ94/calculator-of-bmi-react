import React from 'react';

export default function FunctionHeight(props) {
    return (
        <div>
        <label>Height</label>
        <input
          type="text"
          value={props.hgt}
          onChange={(element) => props.setHgt(element.target.value)}
        />
      </div>
    );
};