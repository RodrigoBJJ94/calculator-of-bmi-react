import React from 'react';
import './Styles.css';

export default function Weight({ weigth, setWeight }) {
    return (
        <div className="div-weight">
            <label>Weight (kg): </label>
            <input
                type="text"
                value={weigth}
                size="3"
                onChange={(element) => setWeight(element.target.value)}
            />
        </div>
    );
};
