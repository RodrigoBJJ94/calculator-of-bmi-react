import React from 'react';
import swal from 'sweetalert';
import './Styles.css';

export default function Calculate({ weight, height, setResult }) {
    const calc = () => {
        if (weight === 0 || weight === '') {
            swal('Please, inform the weight!');
        } else if (height === 0 || height === '') {
            swal('Please, inform the height!');
        } else {
            setResult(weight / ((height * height) / 10000));
        };
    };

    return (
        <div>
            <button onClick={calc}>Calculate</button>
        </div>
    );
};
