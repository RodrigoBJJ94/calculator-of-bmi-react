import React from 'react';

export default function Result(props) {
    return (
        <div className="div-result">
            <p>Result: {props.res.toFixed(2)}</p>
        </div>
    );
};