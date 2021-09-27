import React from 'react';

export default function FunctionWeight(props) {
    return (
        <div>
            <label>Weight </label>
            <input
                type="text"
                value={props.wgt}
                onChange={(element) => props.setWgt(element.target.value)}
            />
        </div>
    );
};