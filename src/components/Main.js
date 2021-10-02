import React from 'react';

export default function Main(props) {
    return (
        <>
        {props.fWeight(props.weight, props.setWeight)}
        {props.fHeight(props.height, props.setHeight)}
        {props.calculate(props.weight, props.height, props.setResult)}
        {props.fResult(props.result)}
        {props.tableImc()}
        </>
    );
};
