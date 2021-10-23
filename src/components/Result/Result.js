import React from 'react';
import './Styles.css';

export default function Result({ result }) {
    return (
        <div className="div-result">
            <p>Result: {result.toFixed(2)}</p>
        </div>
    );
};
