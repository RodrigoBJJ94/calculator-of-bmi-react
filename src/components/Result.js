import React from 'react';

export default function Result(props) {
    return (
        <div>
            <p>Result: {props.res.toFixed(2)}</p>
        </div>
    );
};