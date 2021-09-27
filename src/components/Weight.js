import React from 'react';

export default function Weight(props) {
    return (
        <div className="div-weight">
            <label>Weight (kg): </label>
            <input
                type="text"
                value={props.wgt}
                size="3"
                onChange={(element) => props.setWgt(element.target.value)}
            />
        </div>
    );
};