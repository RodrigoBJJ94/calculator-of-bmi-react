import React from 'react';
import './Styles.css';

export default function Result({ result }) {
    return (
        <div className="div-result">
            {result !== 0 ? `Result: ${result.toFixed(2)}` : ''}
        </div>
    );
};
